import { state } from '../../..';
import { Product } from '../render/productsObj';
import { getCompanyFilteredProducts, resetCompanyFilter } from './companyFilter';

describe('companyFilter', () => {
  const Prod: Array<Product> = [
    {
      imgUrl: 'kalkEbb',
      title: 'Kalk AP',
      year: '2020',
      company: 'CAKE',
      weight: '80',
      topSpeed: '90',
      color: 'green',
      popular: 'no',
      quantity: 1,
    },
    {
      imgUrl: 'surGreen',
      title: 'SUR-RON X GREEN',
      year: '2020',
      company: 'SUR-RON',
      weight: '60',
      topSpeed: '80',
      color: 'green',
      popular: 'yes',
      quantity: 3,
    },
    {
      imgUrl: 'surGray',
      title: 'SUR-RON X GRAY',
      year: '2021',
      company: 'SUR-RON',
      weight: '60',
      topSpeed: '80',
      color: 'white',
      popular: 'no',
      quantity: 2,
    },
    {
      imgUrl: 'kalkInk',
      title: 'Kalk INK',
      year: '2020',
      company: 'CAKE',
      weight: '80',
      topSpeed: '90',
      color: 'black',
      popular: 'no',
      quantity: 6,
    },
    {
      imgUrl: 'segBlue',
      title: 'SEGWAY Dirt eBike X260',
      year: '2018',
      company: 'SEGWAY',
      weight: '80',
      topSpeed: '90',
      color: 'blue',
      popular: 'yes',
      quantity: 4,
    },
  ];

  const cakeProd: Array<Product> = [
    {
      imgUrl: 'kalkEbb',
      title: 'Kalk AP',
      year: '2020',
      company: 'CAKE',
      weight: '80',
      topSpeed: '90',
      color: 'green',
      popular: 'no',
      quantity: 1,
    },
    {
      imgUrl: 'kalkInk',
      title: 'Kalk INK',
      year: '2020',
      company: 'CAKE',
      weight: '80',
      topSpeed: '90',
      color: 'black',
      popular: 'no',
      quantity: 6,
    },
  ];

  const surronSegwayProd: Array<Product> = [
    {
      imgUrl: 'surGreen',
      title: 'SUR-RON X GREEN',
      year: '2020',
      company: 'SUR-RON',
      weight: '60',
      topSpeed: '80',
      color: 'green',
      popular: 'yes',
      quantity: 3,
    },
    {
      imgUrl: 'surGray',
      title: 'SUR-RON X GRAY',
      year: '2021',
      company: 'SUR-RON',
      weight: '60',
      topSpeed: '80',
      color: 'white',
      popular: 'no',
      quantity: 2,
    },
    {
      imgUrl: 'segBlue',
      title: 'SEGWAY Dirt eBike X260',
      year: '2018',
      company: 'SEGWAY',
      weight: '80',
      topSpeed: '90',
      color: 'blue',
      popular: 'yes',
      quantity: 4,
    },
  ];

  describe('getCompanyFilteredProducts', () => {
    it('sorts correct data by one company [CAKE] as expected', () => {
      state.filters.company = ['CAKE'];
      const resultArr = getCompanyFilteredProducts(Prod);
      expect(resultArr).toEqual(cakeProd);
    });
    it('sorts correct data by two companies [SUR-RON, SEGWAY] as expected', () => {
      state.filters.company = ['SUR-RON', 'SEGWAY'];
      const resultArr = getCompanyFilteredProducts(Prod);
      expect(resultArr).toEqual(surronSegwayProd);
    });
    it('sorts correct data by fake company [ALALA] as expected', () => {
      state.filters.company = ['ALALA'];
      const resultArr = getCompanyFilteredProducts(Prod);
      expect(resultArr).toEqual([]);
    });
    it('handles incorrect data, empty array for sort', () => {
      state.filters.company = ['CAKE'];
      expect(() => getCompanyFilteredProducts(undefined as unknown as Array<Product>)).not.toThrow();
    });
  });

  describe('resetCompanyFilter', () => {
    it('removes checked class from company buttons filter', () => {
      resetCompanyFilter();
      const checkedCompanyBtns: NodeListOf<Element> = document.querySelectorAll('.filter-by-company__button_checked');
      expect(checkedCompanyBtns.length).toBe(0);
    });
  });
});
