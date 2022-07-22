import { state } from '../../..';
import { Product } from '../render/productsObj';
import { getPopularFilteredProducts } from './popularFilter';


describe('popularFilter', () => {
  const Prod: Array<Product> = [
    {
      imgUrl: '',
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
      imgUrl: '',
      title: 'Kalk OR',
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
      imgUrl: '',
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
      imgUrl: '',
      title: 'SUR-RON X RED',
      year: '2021',
      company: 'SUR-RON',
      weight: '60',
      topSpeed: '80',
      color: 'red',
      popular: 'yes',
      quantity: 6,
    },
  ];
  
  const popularProd: Array<Product> = [
    {
      imgUrl: '',
      title: 'Kalk OR',
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
      imgUrl: '',
      title: 'SUR-RON X RED',
      year: '2021',
      company: 'SUR-RON',
      weight: '60',
      topSpeed: '80',
      color: 'red',
      popular: 'yes',
      quantity: 6,
    },
  ];
  
  it('selects popular products as expected', () => {
    state.filters.popular = true;
    const resultArr = getPopularFilteredProducts(Prod);
    expect(resultArr).toEqual(popularProd);
  });
});





