import { state } from '../../..';
import { Product } from '../render/productsObj';


export const getColorFilteredProducts = (products: Array<Product>): Array<Product> =>
  state.filters.color.length === 0 ? products : products.filter((p) => state.filters.color.includes(p.color));

export const resetColorFilter = (): void => {
  const checkedColorBtns: NodeListOf<Element> = document.querySelectorAll('.filter-by-color__button_checked');
  checkedColorBtns.forEach((el) => el.classList.remove('filter-by-color__button_checked'));
};
