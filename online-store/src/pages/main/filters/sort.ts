import { state } from '../../..';
import { Product, Products } from '../render/productsObj';

export const sortInput: HTMLSelectElement = document.querySelector('.sort__input')!;

export const sortByNameAZ = (prod: Array<Product>): Array<Product> => {
  return prod.sort((a, b) => a.title.localeCompare(b.title));
};

export const sortByNameZA = (prod: Array<Product>): Array<Product> => {
  return prod.sort((a, b) => b.title.localeCompare(a.title));
};

export const sortByYearOldest = (prod: Array<Product>): Array<Product> => {
  return prod.sort((a, b) => a.year.localeCompare(b.year));
};

export const sortByYearNewest = (prod: Array<Product>): Array<Product> => {
  return prod.sort((a, b) => b.year.localeCompare(a.year));
};

export const sortBy = (productsArr: Array<Product> = Products): Array<Product> => {
  let sortedArr: Array<Product> = [];

  switch (state.sort) {
    case 'name-a':
      sortedArr = sortByNameAZ(productsArr);
      break;
    case 'name-z':
      sortedArr = sortByNameZA(productsArr);
      break;
    case 'year-oldest':
      sortedArr = sortByYearOldest(productsArr);
      break;
    case 'year-newest':
      sortedArr = sortByYearNewest(productsArr);
      break;
  }

  return sortedArr;
};
