import { state } from '../../..';
import { Products } from '../render/productsObj';
import { handleFilterChange } from '../render/renderProducts';

const setLocalStorage = () => {
  console.log('setLocalStorage', state);
  localStorage.setItem(
    'state',
    JSON.stringify({ filters: state.filters, sort: state.sort, cart: state.cart.map((c) => c.title) })
  );
};
window.addEventListener('beforeunload', setLocalStorage);

const getLocalStorage = () => {
  if (localStorage.getItem('state')) {
    const savedStateJSON = localStorage.getItem('state')!;
    const savedState = JSON.parse(savedStateJSON);
    state.filters = savedState.filters;
    state.sort = savedState.sort;
    state.cart = savedState.cart.map((title: string) => Products.find((p) => p.title === title));
    console.log('getLocalStorage', state);
    handleFilterChange();
  }
};
window.addEventListener('load', getLocalStorage);
