import { create, API } from 'nouislider';
import 'nouislider/dist/nouislider.css';
import wNumb from 'wnumb';
import { state } from '../../..';
import { Product } from '../render/productsObj';

const yearSlider: HTMLElement = document.getElementById('year-slider')!;
const amountSlider: HTMLElement = document.getElementById('amount-slider')!;

export const createYearSlider = (): API =>
  create(yearSlider, {
    start: [2018, 2022],
    connect: true,
    tooltips: true,
    step: 1,
    range: {
      min: 2018,
      max: 2022,
    },
    format: wNumb({ decimals: 0 }),
    // format: {
    //   to: (value: number) => Math.round(value).toString(),
    //   from: (value: string) => Number(value),
    // },
  });

export const createAmountSlider = (): API =>
  create(amountSlider, {
    start: [1, 8],
    connect: true,
    tooltips: true,
    step: 1,
    range: {
      min: 1,
      max: 8,
    },
    format: wNumb({ decimals: 0 }),
  });

export const getAmountFilteredProducts = (products: Array<Product>): Array<Product> => {
  const [from, to] = state.filters.amountLeft;

  const filteredAmountProducts: Array<Product> = products.filter(
    (item) => item.quantity >= Number(from) && item.quantity <= Number(to)
  );

  return filteredAmountProducts;
};

export const getYearFilteredProducts = (products: Array<Product>): Array<Product> => {
  const [from, to] = state.filters.year;

  const filteredYearProducts: Array<Product> = products.filter(
    (item) => Number(item.year) >= Number(from) && Number(item.year) <= Number(to)
  );

  return filteredYearProducts;
};