export type Report = {
  totalRevenue: number
  totalDeductions: number
  taxableIncome: number
  totalCompanyTax: number
  medicareLevy: number
  totalTaxOwed: number
}

export type Declaration = {
  declareIndepenceAndRefuseToPayTaxes: boolean
}

const generateReport = (
  {
    totalRevenue,
    totalDeductions,
    taxableIncome,
    totalCompanyTax,
    medicareLevy,
    totalTaxOwed
  }: Report,
  { declareIndepenceAndRefuseToPayTaxes }: Declaration
) => {
  const header = `\n========= TAX REPORT 3019 ========\n
    Total Revenue: ${totalRevenue}
    Total Deductions: ${totalDeductions}
    Taxable Income: ${taxableIncome}
    Total Company Tax: ${totalCompanyTax}
    Medicare Levy: ${medicareLevy}
`

  if (declareIndepenceAndRefuseToPayTaxes) {
    return `${header}\nYou have cast off the oppresive yolk of Earth's governance. 
      You now owe $${totalTaxOwed * 0} in taxes.
      Unfortunately Earth didn't take this so well, so you're going to
      have to start growing your own food. Hope you enjoy eating space fungus.
      The best of luck!!\n`
  }

  return `${header}\nCongratulations! You will continue your subservience to Earth, 
and for the priveledge, you now owe $${totalTaxOwed} in taxes.`
}

export default generateReport
