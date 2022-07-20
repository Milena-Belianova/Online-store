import { state } from '../../..';
import { Product } from '../render/productsObj';

const toggleCheckedClass = (element: HTMLButtonElement): void => {
  if (element.classList.contains('filter-by-color__button_checked')) {
    element.classList.remove('filter-by-color__button_checked');
  } else {
    element.classList.add('filter-by-color__button_checked');
  }
};

const getColor = (item: Element): string => {
  const colorClassRegex = /filter-by-color__button_(.+)/;

  const classWithColor: string = [...(item.classList as unknown as Array<string>)].find((s) =>
    s.match(colorClassRegex)
  )!;

  const color: string = colorClassRegex.exec(classWithColor)![1];

  return color;
};

const handleColorBtnClick = (products: Array<Product>, color?: string): Array<Product> => {
  if (color) {
    const colorBtn: HTMLButtonElement = document.querySelector(`.filter-by-color__button_${color}`)!;

    toggleCheckedClass(colorBtn);
  }
  const checkedColorBtns: NodeListOf<Element> = document.querySelectorAll('.filter-by-color__button_checked');

  let filteredProducts: Array<Product> = products;

  if (checkedColorBtns.length) {
    let colors: Array<string> = [];

    checkedColorBtns.forEach((item) => colors.push(getColor(item)));

    filteredProducts = products.filter((item) => colors.some((c) => item.color === c));
  }
  return filteredProducts;
};

export const getColorFilteredProducts = (products: Array<Product>): Array<Product> =>
  state.filters.color.length === 0 ? products : products.filter((p) => state.filters.color.includes(p.color));

export const resetColorFilter = (): void => {
  const checkedColorBtns: NodeListOf<Element> = document.querySelectorAll('.filter-by-color__button_checked');
  checkedColorBtns.forEach((el) => el.classList.remove('filter-by-color__button_checked'));
};
