import { createAmountSlider, createYearSlider } from '../filters/rangeFilters';

export const getRangeSlidersAPIs = () => ({
  amount: createAmountSlider(),
  year: createYearSlider(),
});
