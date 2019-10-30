// 1. Add up revenue from all months
const addRevenue = revenue =>
  Object.keys(revenue).reduce((accum, item) => accum + revenue[item], 0);

// 2. Add up all allowable deducations
const addDeductions = (deductions, fraudulentDeductions) => {
  const legit = Object.keys(deductions).reduce(
    (accum, item) => accum + deductions[item],
    0
  );
  const fraudulent = fraudulentDeductions.reduce(
    (accum, item) => accum + item,
    0
  );

  return legit + fraudulent;
};

// 3. Subtract total deductions from total revenue
const calcTaxableIncome = (totalRevenue, totalDeductions) =>
  totalRevenue - totalDeductions;

// 4. Apply the company tax rate to taxable income
const calcCompanyTaxRate = (taxableIncome, corpTaxRate) =>
  taxableIncome * corpTaxRate;

// 5. Calculate the medicare levy and add it to total tax owed
const calcMedicareLevy = (totalCompanyTax, medicareRate) =>
  totalCompanyTax * medicareRate;

// 6. Output the result as total tax owed
const calcTotalTaxOwed = (totalCompanyTax, medicareLevy) =>
  totalCompanyTax + medicareLevy;

const calculateTax = ({
  corpTaxRate,
  deductions,
  fraudulentDeductions,
  medicareRate,
  revenue
}) => {
  const totalRevenue = addRevenue(revenue);

  const totalDeductions = addDeductions(deductions, fraudulentDeductions);

  const taxableIncome = calcTaxableIncome(totalRevenue, totalDeductions);

  const totalCompanyTax = calcCompanyTaxRate(taxableIncome, corpTaxRate);

  const medicareLevy = calcMedicareLevy(totalCompanyTax, medicareRate);

  const totalTaxOwed = calcTotalTaxOwed(totalCompanyTax, medicareLevy);

  return {
    totalRevenue,
    totalDeductions,
    taxableIncome,
    totalCompanyTax,
    medicareLevy,
    totalTaxOwed
  };
};

export default calculateTax;
