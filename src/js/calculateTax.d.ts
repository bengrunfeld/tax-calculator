declare module "ts-tax-calc" {
  type Revenue = { [index: string]: number }
  type Deductions = { [index: string]: number }
  type FraudulentDeductions = number[]
  type MedicareRate = number
  type CorpTaxRate = number

  export function addRevenue(revenue: Revenue): number

  export function addDeductions(
    deductions: Deductions,
    fraudulentDeductions: FraudulentDeductions
  ): number

  export function calcTaxableIncome(
    totalRevenue: number,
    totalDeductions: number
  ): number

  export function calcCompanyTaxRate(
    taxableIncome: number,
    corpTaxRate: number
  ): number

  export function calcMedicareLevy(
    totalCompanyTax: number,
    medicareRate: number
  ): number

  export function calcTotalTaxOwed(
    totalCompanyTax: number,
    medicareLevy: number
  ): number

  type CalculateTaxArgs = {
    corpTaxRate: CorpTaxRate
    deductions: Deductions
    fraudulentDeductions: FraudulentDeductions
    medicareRate: MedicareRate
    revenue: Revenue
  }

  export function calculateTax({
    corpTaxRate,
    deductions,
    fraudulentDeductions,
    medicareRate,
    revenue
  }: CalculateTaxArgs): { [index: string]: number }
}
