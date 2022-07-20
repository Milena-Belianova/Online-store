import { state } from '../../..';
import { Product } from '../render/productsObj';

const toggleCheckedClass = (element: HTMLButtonElement): void => {
  if (element.classList.contains('filter-by-weight__button_checked')) {
    element.classList.remove('filter-by-weight__button_checked');
  } else {
    element.classList.add('filter-by-weight__button_checked');
  }
};

const getWeight = (item: Element): string => {
  const weightClassRegex = /filter-by-weight__button_(.+)/;

  const classWithWeight: string = [...(item.classList as unknown as Array<string>)].find((s) =>
    s.match(weightClassRegex)
  )!;

  const weight: string = weightClassRegex.exec(classWithWeight)![1];

  return weight;
};

const handleWeightBtnClick = (products: Array<Product>, weight?: string): Array<Product> => {
  if (weight) {
    const weightBtn: HTMLButtonElement = document.querySelector(`.filter-by-weight__button_${weight}`)!;
    toggleCheckedClass(weightBtn);
  }

  const checkedWeightBtns: NodeListOf<Element> = document.querySelectorAll('.filter-by-weight__button_checked');

  let filteredProducts: Array<Product> = products;

  if (checkedWeightBtns.length) {
    let weights: Array<string> = [];

    checkedWeightBtns.forEach((item) => weights.push(getWeight(item)));

    filteredProducts = products.filter((item) => weights.some((w) => item.weight === w));
  }
  return filteredProducts;
};

export const getWeightFilteredProducts = (products: Array<Product>): Array<Product> =>
  state.filters.weight.length === 0 ? products : products.filter((p) => { 
    return state.filters.weight.includes(p.weight)
  });

export const resetWeightFilter = (): void => {
  const checkedWeightBtns: NodeListOf<Element> = document.querySelectorAll('.filter-by-weight__button_checked');
  checkedWeightBtns.forEach((el) => el.classList.remove('filter-by-weight__button_checked'));
};
