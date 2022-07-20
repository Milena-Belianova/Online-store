import { state } from '../../..';
import { Product } from '../render/productsObj';

export const popularCheckbox: HTMLInputElement = document.querySelector('#popular')!;

export const getPopularFilteredProducts = (products: Array<Product>): Array<Product> =>
  state.filters.popular ? products.filter((p) => p.popular === 'yes') : products;
