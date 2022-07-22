import { state } from '../../..';
import { Product } from '../render/productsObj';


export const getWeightFilteredProducts = (products: Array<Product>): Array<Product> =>
  state.filters.weight.length === 0 ? products : products.filter((p) => { 
    return state.filters.weight.includes(p.weight)
  });

export const resetWeightFilter = (): void => {
  const checkedWeightBtns: NodeListOf<Element> = document.querySelectorAll('.filter-by-weight__button_checked');
  checkedWeightBtns.forEach((el) => el.classList.remove('filter-by-weight__button_checked'));
};
