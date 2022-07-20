
const createNoProductsMessageFragment = () => {
  const fragment: DocumentFragment = document.createDocumentFragment();

  const noProductMessage: HTMLDivElement = document.createElement('div');
  noProductMessage.className = 'no-product-message';
  noProductMessage.textContent = 'Sorry, no matches found';

  fragment.append(noProductMessage);
  return fragment;
}


export const showNoProductsMessage = (): void => {
 const mainContainer: HTMLElement = document.querySelector('.products__container')!;

 mainContainer.innerHTML = '';
 mainContainer.append(createNoProductsMessageFragment());
}