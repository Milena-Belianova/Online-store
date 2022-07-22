import { state } from '../../..';
import { Product, Products } from '../render/productsObj';

export const searchInput = document.getElementById('search-input')! as HTMLInputElement;

export const getSearchFilteredProducts = (products: Array<Product> = Products): Array<Product> =>
  products.filter((s) => s.title.toLowerCase().indexOf(state.search.toLowerCase()) !== -1);

export const resetSearchFilter = () => {
  searchInput.value = '';
};
