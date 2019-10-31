import {
  CorpTaxRate,
  Deductions,
  FraudulentDeductions,
  MedicareRate,
  Revenue
} from "../data/data.types"

// 1. Add up revenue from all months
const addRevenue = (revenue: Revenue): number =>
  Object.keys(revenue).reduce((accum, item) => accum + revenue[item], 0)

// 2. Add up all allowable deducations
const addDeductions = (
  deductions: Deductions,
  fraudulentDeductions: FraudulentDeductions
): number => {
  const legit = Object.keys(deductions).reduce(
    (accum, item) => accum + deductions[item],
    0
  )
  const fraudulent = fraudulentDeductions.reduce(
    (accum, item) => accum + item,
    0
  )

  return legit + fraudulent
}

// 3. Subtract total deductions from total revenue
const calcTaxableIncome = (
  totalRevenue: number,
  totalDeductions: number
): number => totalRevenue - totalDeductions

// 4. Apply the company tax rate to taxable income
const calcCompanyTaxRate = (
  taxableIncome: number,
  corpTaxRate: number
): number => taxableIncome * corpTaxRate

// 5. Calculate the medicare levy and add it to total tax owed
const calcMedicareLevy = (
  totalCompanyTax: number,
  medicareRate: number
): number => totalCompanyTax * medicareRate

// 6. Output the result as total tax owed
const calcTotalTaxOwed = (
  totalCompanyTax: number,
  medicareLevy: number
): number => totalCompanyTax + medicareLevy

type CalculateTaxArgs = {
  corpTaxRate: CorpTaxRate
  deductions: Deductions
  fraudulentDeductions: FraudulentDeductions
  medicareRate: MedicareRate
  revenue: Revenue
}

const calculateTax = ({
  corpTaxRate,
  deductions,
  fraudulentDeductions,
  medicareRate,
  revenue
}: CalculateTaxArgs) => {
  const totalRevenue = addRevenue(revenue)

  const totalDeductions = addDeductions(deductions, fraudulentDeductions)

  const taxableIncome = calcTaxableIncome(totalRevenue, totalDeductions)

  const totalCompanyTax = calcCompanyTaxRate(taxableIncome, corpTaxRate)

  const medicareLevy = calcMedicareLevy(totalCompanyTax, medicareRate)

  const totalTaxOwed = calcTotalTaxOwed(totalCompanyTax, medicareLevy)

  return {
    totalRevenue,
    totalDeductions,
    taxableIncome,
    totalCompanyTax,
    medicareLevy,
    totalTaxOwed
  }
}

export default calculateTax
