export type Account = { [index: string]: string }
export type Revenue = { [index: string]: number }
export type Deductions = { [index: string]: number }
export type FraudulentDeductions = number[]
export type MedicareRate = number
export type CorpTaxRate = number
export type Declaration = boolean

export type Data = {
  account: Account
  revenue: Revenue
  deductions: Deductions
  fraudulentDeductions: FraudulentDeductions
  medicareRate: MedicareRate
  corpTaxRate: CorpTaxRate
  declareIndepenceAndRefuseToPayTaxes: Declaration
}
