import './reset.scss';
import './global.scss';
import './pages/main/filters/filters.scss';
import { handleFilterChange, initStaticHandlers, renderState } from './pages/main/render/renderProducts';
import { getRangeSlidersAPIs } from './pages/main/render/renderRangeSliders';
import { Product, Products } from './pages/main/render/productsObj';
import './pages/main/localStorage/localStorage';
import { API } from 'nouislider';

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

export const popularCheckbox: HTMLInputElement = document.querySelector('#popular')!;
export let amount: API;
export let year: API;

export const state = new State();

export const startApp = () => {
  if (localStorage.getItem('state')) {
    const savedStateJSON = localStorage.getItem('state')!;
    const savedState = JSON.parse(savedStateJSON);
    state.filters = savedState.filters;
    state.sort = savedState.sort;
    state.cart = savedState.cart.map((title: string) => Products.find((p) => p.title === title));
    console.log('getLocalStorage', state);
  }

  const sliders = getRangeSlidersAPIs(state.filters.amountLeft, state.filters.year);
  amount = sliders.amount;
  year = sliders.year;
  initStaticHandlers();
  handleFilterChange();
};

//so that module import won't trigger DOM changes while unit testing
window.addEventListener('load', startApp);
