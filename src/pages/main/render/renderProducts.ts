import { Product, Products } from './productsObj';
import './products.scss';
import { getPopularFilteredProducts } from '../filters/popularFilter';
import { amount, Filters, getDefaultFilters, popularCheckbox, state, year } from '../../..';
import { changeProductNumberInCart, hideModal, modal, showModal } from '../cart/productsInCart';
import { getColorFilteredProducts } from '../filters/colorFilter';
import { getCompanyFilteredProducts } from '../filters/companyFilter';
import { getAmountFilteredProducts, getYearFilteredProducts } from '../filters/rangeFilters';
import { getSearchFilteredProducts, resetSearchFilter, searchInput } from '../filters/search';
import { sortBy, sortInput } from '../filters/sort';
import { getWeightFilteredProducts } from '../filters/weightFilter';
import { showNoProductsMessage } from './renderMessages';

export const handleFilterChange = (): void => {
  console.log('handleFilterChange before', state);
  const filteredSearchProducts = getSearchFilteredProducts(Products);
  const filteredCompanyProducts = getCompanyFilteredProducts(filteredSearchProducts);
  const filteredWeightProducts = getWeightFilteredProducts(filteredCompanyProducts);
  const filteredColorProducts = getColorFilteredProducts(filteredWeightProducts);
  const filteredPopularProducts = getPopularFilteredProducts(filteredColorProducts);
  const filteredAmountProducts = getAmountFilteredProducts(filteredPopularProducts);
  const filteredYearProducts = getYearFilteredProducts(filteredAmountProducts);
  const filteredSortChange = sortBy(filteredYearProducts);
  state.cards = filteredSortChange;

  console.log('handleFilterChange after', state);
  if (filteredSortChange.length) {
    renderState();
  } else {
    renderState();
    showNoProductsMessage();
  }
};

const handleResetFiltersBtnClick = () => {
  state.filters = getDefaultFilters();
  resetSearchFilter();
  handleFilterChange();
  renderState();
};

const handleResetSettingsBtnClick = () => {
  handleResetFiltersBtnClick();
  state.sort = 'name-a';
  handleFilterChange();
  state.cart = [];
  renderState();
};

const displayStringFilter = (name: keyof Filters) => {
  const className = `filter-by-${name}__button`;
  const checkedClassName = `${className}_checked`;
  document.querySelectorAll(`.${className}`).forEach((b) => {
    if ((state.filters[name] as Array<string>).includes(b.textContent!)) {
      b.classList.add(checkedClassName);
    } else {
      b.classList.remove(checkedClassName);
    }
  });
};

const displayColor = () => {
  const className = 'filter-by-color__button';
  const checkedClassName = `${className}_checked`;
  document.querySelectorAll(`.${className}`).forEach((btn) => {
    const color = (btn as HTMLElement).dataset.color!;
    if (state.filters.color.includes(color)) {
      btn.classList.add(checkedClassName);
    } else {
      btn.classList.remove(checkedClassName);
    }
  });
};

const displayPopular = () => {
  popularCheckbox.checked = state.filters.popular;
};

const displayAmount = () => {
  amount.set(state.filters.amountLeft);
};

const displayYear = () => {
  year.set(state.filters.year);
};

const displaySearch = () => {
  searchInput.value = state.search;
};

const displaySort = () => {
  sortInput.value = state.sort;
}

const displayFilters = () => {
  displayStringFilter('company');
  displayStringFilter('weight');
  displayColor();
  displayPopular();
  displayAmount();
  displayYear();
  displaySearch();
  displaySort();
};

const removeItem = <T>(array: Array<T>, item: T) => {
  const index = array.indexOf(item);
  array.splice(index, 1);
};

const toggleArrayFilter = (name: keyof Filters, value: string) => {
  const filter = state.filters[name] as Array<string>;
  if (filter.includes(value)) {
    removeItem(filter, value);
  } else {
    filter.push(value);
  }
};

const stringFilterHandler = (filterName: keyof Filters) => (el: Element) =>
  el.addEventListener('click', () => {
    toggleArrayFilter(filterName, el.textContent!);
    handleFilterChange();
  });

const handleSearch = () => {
  state.search = searchInput.value || '';
  handleFilterChange();
};

export const initStaticHandlers = () => {
  document.getElementById('search-input')!.addEventListener('input', handleSearch);
  document.getElementById('search-icon')!.addEventListener('click', handleSearch);
  document.getElementById('reset-filters__button')!.addEventListener('click', handleResetFiltersBtnClick);
  document.getElementById('reset-settings__button')!.addEventListener('click', handleResetSettingsBtnClick);
  document.getElementById('sort')!.addEventListener('change', () => {
    state.sort = sortInput.value;
    handleFilterChange();
  });
  document.getElementById('modal__button-ok')!.addEventListener('click', hideModal);
  document.getElementById('modal__button-close')!.addEventListener('click', hideModal);
  document.querySelectorAll('.filter-by-company__button')!.forEach(stringFilterHandler('company'));
  document.querySelectorAll('.filter-by-weight__button')!.forEach(stringFilterHandler('weight'));
  document.querySelectorAll('.filter-by-color__button')!.forEach((el) =>
    el.addEventListener('click', () => {
      const color = (el as HTMLElement).dataset.color;
      toggleArrayFilter('color', color!);
      handleFilterChange();
    })
  );
  popularCheckbox.addEventListener('change', () => {
    state.filters.popular = popularCheckbox.checked;
    handleFilterChange();
  });
  amount.on('change', () => {
    state.filters.amountLeft = amount.get() as [string, string];
    handleFilterChange();
  });
  year.on('change', () => {
    state.filters.year = year.get() as [string, string];
    handleFilterChange();
  });
  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      hideModal();
    }
  });
};

export const renderState = (): void => {
  const productsContainer: HTMLDivElement = document.querySelector('.products__container')!;
  productsContainer.innerHTML = '';
  state.cards.forEach((item) => productsContainer.append(createProduct(item)));
  changeProductNumberInCart();
  displayFilters();
};

const createProduct = (productItem: Product): DocumentFragment => {
  const fragment: DocumentFragment = document.createDocumentFragment();

  const productWrapper: HTMLDivElement = document.createElement('div');
  productWrapper.className = 'product';

  productWrapper.append(createProductInfoFragment(productItem), createProductBtnsFragment(productItem));

  fragment.append(productWrapper);
  return fragment;
};

const createProductInfoFragment = (productItem: Product): DocumentFragment => {
  const fragment: DocumentFragment = document.createDocumentFragment();

  const productImg: HTMLDivElement = document.createElement('div');
  productImg.className = 'product__img';
  productImg.style.backgroundImage = `url(${productItem.imgUrl || './assets/img/rider.jpg'})`;

  const productInfo: HTMLDivElement = document.createElement('div');
  productInfo.className = 'product__info';

  const productTitle: HTMLHeadingElement = document.createElement('h3');
  productTitle.className = 'product__title';
  productTitle.textContent = productItem.title;

  const productYear: HTMLParagraphElement = document.createElement('p');
  productYear.className = 'product__year';
  productYear.textContent = `Year: ${productItem.year}`;

  const productCompany: HTMLParagraphElement = document.createElement('p');
  productCompany.className = 'product__company';
  productCompany.textContent = `Company: ${productItem.company.toUpperCase()}`;

  const productWeightSpeed: HTMLParagraphElement = document.createElement('p');
  productWeightSpeed.className = 'product__weight-speed';
  productWeightSpeed.textContent = `Weight: ${productItem.weight}kg, Top speed: ${productItem.topSpeed}km/h`;

  const productColor: HTMLParagraphElement = document.createElement('p');
  productColor.className = 'product__color-popular';
  productColor.textContent = `Color: ${productItem.color}, Popular: ${productItem.popular}`;

  const productQuantity: HTMLParagraphElement = document.createElement('p');
  productQuantity.className = 'product__quantity';
  productQuantity.textContent = `Amount left: ${productItem.quantity}`;

  productInfo.append(productTitle, productYear, productCompany, productWeightSpeed, productColor, productQuantity);

  fragment.append(productImg, productInfo);
  return fragment;
};

const createProductBtnsFragment = (productItem: Product): DocumentFragment => {
  const addToCart = (): void => {
    if (state.cart.length < 20) {
      state.cart.push(productItem);
      renderState();
    } else {
      showModal();
    }
  };

  const removeFromCart = (): void => {
    const index = state.cart.indexOf(productItem);
    if (index > -1) {
      state.cart.splice(index, 1);
    }
    renderState();
  };

  const fragment: DocumentFragment = document.createDocumentFragment();

  const productBtnsContainer: HTMLDivElement = document.createElement('div');
  productBtnsContainer.className = 'product__btns';

  const productBtnGroup: HTMLDivElement = document.createElement('div');
  productBtnGroup.className = 'product__btn_group';

  const productBtnRemove: HTMLButtonElement = document.createElement('button');
  productBtnRemove.className = 'product__btn_remove product__btn_group-item';
  productBtnRemove.textContent = '-';
  productBtnRemove.addEventListener('click', removeFromCart);

  const productBtnAmountInCart: HTMLButtonElement = document.createElement('button');
  productBtnAmountInCart.className = 'product__btn_amount-in-cart product__btn_group-item';
  productBtnAmountInCart.textContent = state.cart.filter((c) => c === productItem).length.toString();

  const productBtnAdd: HTMLButtonElement = document.createElement('button');
  productBtnAdd.className = 'product__btn_add product__btn_group-item';
  productBtnAdd.textContent = '+';
  productBtnAdd.addEventListener('click', addToCart);

  const addClassColor = (): void => {
    productBtnRemove.classList.add('in-cart');
    productBtnAmountInCart.classList.add('in-cart');
    productBtnAdd.classList.add('in-cart');
  };

  const removeClassColor = (): void => {
    productBtnRemove.classList.remove('in-cart');
    productBtnAmountInCart.classList.remove('in-cart');
    productBtnAdd.classList.remove('in-cart');
  };

  if (state.cart.includes(productItem)) {
    addClassColor();
  } else {
    removeClassColor();
  }

  productBtnGroup.append(productBtnRemove, productBtnAmountInCart, productBtnAdd);

  const productBtnAddToCart: HTMLButtonElement = document.createElement('button');
  productBtnAddToCart.className = 'product__btn_add-to-cart';
  productBtnAddToCart.textContent = 'Add to cart';
  productBtnAddToCart.addEventListener('click', addToCart);

  productBtnsContainer.append(productBtnGroup, productBtnAddToCart);

  fragment.append(productBtnsContainer);
  return fragment;
};
