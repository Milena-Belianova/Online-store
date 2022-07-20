import './reset.scss';
import './global.scss';
import './pages/main/filters/filters.scss';
import { initStaticHandlers, renderState } from './pages/main/render/renderProducts';
import { getRangeSlidersAPIs } from './pages/main/render/renderRangeSliders';
import { Product, Products } from './pages/main/render/productsObj';
import './pages/main/localStorage/localStorage';

export type Filters = {
  company: Array<string>;
  weight: Array<string>;
  color: Array<string>;
  popular: boolean;
  amountLeft: [string, string];
  year: [string, string];
};

export const DEFAULT_FILTERS = {
  company: [],
  weight: [],
  color: [],
  popular: false,
  amountLeft: ['1', '8'] as [string, string],
  year: ['2018', '2022'] as [string, string],
} as Readonly<Filters>;

export const getDefaultFilters = () => JSON.parse(JSON.stringify(DEFAULT_FILTERS));

class State {
  filters: Filters = getDefaultFilters();
  cards: Array<Product> = Products;
  search: string = '';
  cart: Array<Product> = [];
  sort: string = 'name-a';
}

export const state = new State();

export const { amount, year } = getRangeSlidersAPIs();

initStaticHandlers();
renderState();
