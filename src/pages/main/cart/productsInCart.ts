import { state } from '../../..';
import './modal.scss';

const cartProductNumber = document.getElementById('cart-products-number')! as HTMLDivElement;
export const modal: HTMLElement = document.getElementById('modal')!;


export const showModal = () => {
  modal.style.display = 'flex';
}

export const hideModal = () => {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    hideModal();
  }
});

export const changeProductNumberInCart = (): void => {
  cartProductNumber.style.display = state.cart.length > 0 ? 'block' : 'none';
  cartProductNumber.textContent = state.cart.length.toString();
}
