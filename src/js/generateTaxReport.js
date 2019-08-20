const generateTaxReport = (
  {
    totalRevenue,
    totalDeductions,
    taxableIncome,
    totalCompanyTax,
    medicareLevy,
    totalTaxOwed,
  },
  declareIndepenceAndRefuseToPayTaxes
) => {
  const header = `\n\n========= TAX REPORT 3019 ========
Total Revenue: ${totalRevenue}
Total Deductions: ${totalDeductions}
Taxable Income: ${taxableIncome}
Total Company Tax: ${totalCompanyTax}
Medicare Levy: ${medicareLevy}
`;

  if (declareIndepenceAndRefuseToPayTaxes) {
    return `${header}\nYou have cast off the oppresive yolk of Earth's governance. 
You now owe $${totalTaxOwed * 0} in taxes.
Unfortunately Earth didn't take this so well, so you're going to
have to start growing your own food. Hope you enjoy eating space fungus.
The best of luck!!`;
  }

  return `${header}\nCongratulations! You will continue your subservience to Earth, 
and for the priveledge, you now owe $${totalTaxOwed} in taxes.`;
};

export default generateTaxReport;
