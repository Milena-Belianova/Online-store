import kalkEbb from '../../../assets/img/kalk-ebb.jpg';
import kalkInk from '../../../assets/img/kalk-ink.jpg';
import kalkOr from '../../../assets/img/kalk-or.jpg';
import surGreen from '../../../assets/img/surron-x-green.jpg';
import surGray from '../../../assets/img/surron-x-gray.jpg';
import surBlue from '../../../assets/img/surron-x-blue.jpg';
import surRed from '../../../assets/img/surron-x-red.jpg';
import surYellow from '../../../assets/img/surron-x-yellow.jpg';
import surBlack from '../../../assets/img/surron-x-black.jpg';
import segRed from '../../../assets/img/x160-red.png';
import segBlue from '../../../assets/img/x260-blue.png';
import talaria from '../../../assets/img/talaria-sting-off-road.jpg';

export type Product = {
  imgUrl: string;
  title: string;
  year: string;
  company: string;
  weight: string;
  topSpeed: string;
  color: string;
  popular: string;
  quantity: number;
};

export const Products: Array<Product> = [
  {
    imgUrl: kalkEbb,
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
    imgUrl: kalkInk,
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
    imgUrl: kalkOr,
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
    imgUrl: surGreen,
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
    imgUrl: surGray,
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
    imgUrl: surBlue,
    title: 'SUR-RON X BLUE',
    year: '2019',
    company: 'SUR-RON',
    weight: '60',
    topSpeed: '80',
    color: 'blue',
    popular: 'no',
    quantity: 3,
  },
  {
    imgUrl: surRed,
    title: 'SUR-RON X RED',
    year: '2021',
    company: 'SUR-RON',
    weight: '60',
    topSpeed: '80',
    color: 'red',
    popular: 'yes',
    quantity: 6,
  },
  {
    imgUrl: surYellow,
    title: 'SUR-RON X YELLOW',
    year: '2019',
    company: 'SUR-RON',
    weight: '60',
    topSpeed: '80',
    color: 'yellow',
    popular: 'yes',
    quantity: 5,
  },
  {
    imgUrl: surBlack,
    title: 'SUR-RON X BLACK',
    year: '2022',
    company: 'SUR-RON',
    weight: '60',
    topSpeed: '80',
    color: 'black',
    popular: 'yes',
    quantity: 8,
  },
  {
    imgUrl: segRed,
    title: 'SEGWAY Dirt eBike X160',
    year: '2021',
    company: 'SEGWAY',
    weight: '60',
    topSpeed: '75',
    color: 'red',
    popular: 'no',
    quantity: 7,
  },
  {
    imgUrl: segBlue,
    title: 'SEGWAY Dirt eBike X260',
    year: '2018',
    company: 'SEGWAY',
    weight: '80',
    topSpeed: '90',
    color: 'blue',
    popular: 'yes',
    quantity: 4,
  },
  {
    imgUrl: talaria,
    title: 'TALARIA Sting Off Road',
    year: '2018',
    company: 'TALARIA',
    weight: '80',
    topSpeed: '75',
    color: 'black',
    popular: 'no',
    quantity: 1,
  },
];

