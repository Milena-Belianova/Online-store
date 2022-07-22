import { state } from '../../..';
import { Product, Products } from '../render/productsObj';

export const sortInput: HTMLSelectElement = document.querySelector('.sort__input')!;

export const sortByNameAZ = (prod: Array<Product>): Array<Product> => {
  return prod ? prod.sort((a, b) => a.title.localeCompare(b.title)) : prod;
};

export const sortByNameZA = (prod: Array<Product>): Array<Product> => {
  return prod ? prod.sort((a, b) => b.title.localeCompare(a.title)) : prod;
};

export const sortByYearOldest = (prod: Array<Product>): Array<Product> => {
  return prod ? prod.sort((a, b) => a.year.localeCompare(b.year)) : prod;
};

export const sortByYearNewest = (prod: Array<Product>): Array<Product> => {
  return prod ? prod.sort((a, b) => b.year.localeCompare(a.year)) : prod;
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
