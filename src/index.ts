import {
  businessName,
  businessSlogan,
  corpTaxRate,
  declareIndepenceAndRefuseToPayTaxes,
  deductions,
  fraudulentDeductions,
  medicareRate,
  revenue,
} from './js/data';

import generateTaxReport from './js/generateTaxReport'
import calculateTax from './js/calculateTax';

import './css/style.css';

const dataPacket = {
  businessName,
  businessSlogan,
  corpTaxRate,
  deductions,
  fraudulentDeductions,
  medicareRate,
  revenue,
};

const taxResults = calculateTax(dataPacket);

const report = generateTaxReport(taxResults, declareIndepenceAndRefuseToPayTaxes);

console.log(report)

if (module.hot) module.hot.accept(); // eslint-disable-line no-undef
