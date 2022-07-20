import { state } from '../../..';
import { Product } from '../render/productsObj';

const toggleCheckedClass = (element: HTMLButtonElement): void => {
  if (element.classList.contains('filter-by-company__button_checked')) {
    element.classList.remove('filter-by-company__button_checked');
  } else {
    element.classList.add('filter-by-company__button_checked');
  }
};

const getCompany = (item: Element): string => {
  const companyClassRegex = /filter-by-company__button_(.+)/;

  const classWithCompany: string = [...(item.classList as unknown as Array<string>)].find((s) =>
    s.match(companyClassRegex)
  )!;

  const company: string = companyClassRegex.exec(classWithCompany)![1];

  return company;
};

export const getCompanyFilteredProducts = (products: Array<Product>): Array<Product> =>
  state.filters.company.length === 0 ? products : products.filter((p) => state.filters.company.includes(p.company));

export const resetCompanyFilter = (): void => {
  const checkedCompanyBtns: NodeListOf<Element> = document.querySelectorAll('.filter-by-company__button_checked');
  checkedCompanyBtns.forEach((el) => el.classList.remove('filter-by-company__button_checked'));
};
