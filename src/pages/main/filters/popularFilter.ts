import { state } from '../../..';
import { Product } from '../render/productsObj';

export const getPopularFilteredProducts = (products: Array<Product>): Array<Product> =>
  state.filters.popular ? products.filter((p) => p.popular === 'yes') : products;
