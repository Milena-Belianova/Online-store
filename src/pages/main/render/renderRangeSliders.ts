import { createAmountSlider, createYearSlider } from '../filters/rangeFilters';

export const getRangeSlidersAPIs = (startAmount?: [string, string], startYear?: [string, string]) => ({
  amount: createAmountSlider(startAmount),
  year: createYearSlider(startYear),
});
