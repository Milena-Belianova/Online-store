import { state } from '../../..';
import { Product } from '../render/productsObj';


export const getCompanyFilteredProducts = (products: Array<Product>): Array<Product> => {
  if(products) {
    return state.filters.company.length === 0 ? products : products.filter((p) => state.filters.company.includes(p.company));
  } else {
    return products;
  }
}

export const resetCompanyFilter = (): void => {
  const checkedCompanyBtns: NodeListOf<Element> = document.querySelectorAll('.filter-by-company__button_checked');
  checkedCompanyBtns.forEach((el) => el.classList.remove('filter-by-company__button_checked'));
};
