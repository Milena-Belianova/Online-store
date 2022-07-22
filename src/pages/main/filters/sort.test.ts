import { state } from "../../..";
import { Product } from "../render/productsObj";
import { sortByNameAZ, sortByNameZA, sortByYearNewest, sortByYearOldest } from "./sort";

describe('sort', () => {
  const Prod: Array<Product> = [
    {
      imgUrl: '',
      title: 'Apreto',
      year: '2020',
      company: 'CAKE',
      weight: '80',
      topSpeed: '90',
      color: 'green',
      popular: 'no',
      quantity: 1,
    },
    {
      imgUrl: '',
      title: 'Zarya',
      year: '2022',
      company: 'CAKE',
      weight: '80',
      topSpeed: '90',
      color: 'white',
      popular: 'yes',
      quantity: 5,
    },
    {
      imgUrl: '',
      title: 'Ural',
      year: '2019',
      company: 'SUR-RON',
      weight: '60',
      topSpeed: '80',
      color: 'green',
      popular: 'yes',
      quantity: 3,
    },
    {
      imgUrl: '',
      title: 'Cake',
      year: '2021',
      company: 'SUR-RON',
      weight: '60',
      topSpeed: '80',
      color: 'white',
      popular: 'no',
      quantity: 2,
    },
  ];
  
  const zaProd: Array<Product> = [
    {
      imgUrl: '',
      title: 'Zarya',
      year: '2022',
      company: 'CAKE',
      weight: '80',
      topSpeed: '90',
      color: 'white',
      popular: 'yes',
      quantity: 5,
    },
    {
      imgUrl: '',
      title: 'Ural',
      year: '2019',
      company: 'SUR-RON',
      weight: '60',
      topSpeed: '80',
      color: 'green',
      popular: 'yes',
      quantity: 3,
    },
    {
      imgUrl: '',
      title: 'Cake',
      year: '2021',
      company: 'SUR-RON',
      weight: '60',
      topSpeed: '80',
      color: 'white',
      popular: 'no',
      quantity: 2,
    },
    {
      imgUrl: '',
      title: 'Apreto',
      year: '2020',
      company: 'CAKE',
      weight: '80',
      topSpeed: '90',
      color: 'green',
      popular: 'no',
      quantity: 1,
    },
  ];

  const azProd: Array<Product> = [
    {
      imgUrl: '',
      title: 'Apreto',
      year: '2020',
      company: 'CAKE',
      weight: '80',
      topSpeed: '90',
      color: 'green',
      popular: 'no',
      quantity: 1,
    },
    {
      imgUrl: '',
      title: 'Cake',
      year: '2021',
      company: 'SUR-RON',
      weight: '60',
      topSpeed: '80',
      color: 'white',
      popular: 'no',
      quantity: 2,
    },
    {
      imgUrl: '',
      title: 'Ural',
      year: '2019',
      company: 'SUR-RON',
      weight: '60',
      topSpeed: '80',
      color: 'green',
      popular: 'yes',
      quantity: 3,
    },
    {
      imgUrl: '',
      title: 'Zarya',
      year: '2022',
      company: 'CAKE',
      weight: '80',
      topSpeed: '90',
      color: 'white',
      popular: 'yes',
      quantity: 5,
    },
  ];

  const yearOldestProd: Array<Product> = [
    {
      imgUrl: '',
      title: 'Ural',
      year: '2019',
      company: 'SUR-RON',
      weight: '60',
      topSpeed: '80',
      color: 'green',
      popular: 'yes',
      quantity: 3,
    },
    {
      imgUrl: '',
      title: 'Apreto',
      year: '2020',
      company: 'CAKE',
      weight: '80',
      topSpeed: '90',
      color: 'green',
      popular: 'no',
      quantity: 1,
    },
    {
      imgUrl: '',
      title: 'Cake',
      year: '2021',
      company: 'SUR-RON',
      weight: '60',
      topSpeed: '80',
      color: 'white',
      popular: 'no',
      quantity: 2,
    },
    {
      imgUrl: '',
      title: 'Zarya',
      year: '2022',
      company: 'CAKE',
      weight: '80',
      topSpeed: '90',
      color: 'white',
      popular: 'yes',
      quantity: 5,
    },
  ];

  
  describe('sortByNameZA', () => {
    it('sorts correct data by title (Z-A) as expected', () => {
      state.sort = 'name-z';
      const resultArr = sortByNameZA(Prod);
      expect(resultArr).toEqual(zaProd);
    });
    it('handles incorrect data, empty array', () => {
      expect(() => sortByNameZA(undefined as unknown as Array<Product>)).not.toThrow();
    });
  });

  describe('sortByNameAZ', () => {
    it('sorts correct data by title (A-Z) as expected', () => {
      state.sort = 'name-a';
      const resultArr = sortByNameAZ(Prod);
      expect(resultArr).toEqual(azProd);
    });
    it('handles incorrect data, empty array', () => {
      expect(() => sortByNameAZ(undefined as unknown as Array<Product>)).not.toThrow();
    });
  });

  describe('sortByYearOldest', () => {
    it('sorts correct data by year (old->new) as expected', () => {
      state.sort = 'year-oldest';
      const resultArr = sortByYearOldest(Prod);
      expect(resultArr).toEqual(yearOldestProd);
    });
    it('handles incorrect data, empty array', () => {
      expect(() => sortByYearOldest(undefined as unknown as Array<Product>)).not.toThrow();
    });
  });

  describe('sortByYearNewest', () => {
    it('sorts correct data by year (new->old) as expected', () => {
      state.sort = 'year-newest';
      const resultArr = sortByYearNewest(Prod);
      expect(resultArr).toEqual(yearOldestProd.reverse());
    });
    it('handles incorrect data, empty array', () => {
      expect(() => sortByYearNewest(undefined as unknown as Array<Product>)).not.toThrow();
    });
  });
})


