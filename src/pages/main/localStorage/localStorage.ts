import { state } from '../../..';

const setLocalStorage = () => {
  console.log('setLocalStorage', state);
  localStorage.setItem(
    'state',
    JSON.stringify({ filters: state.filters, sort: state.sort, cart: state.cart.map((c) => c.title) })
  );
};
window.addEventListener('beforeunload', setLocalStorage);
