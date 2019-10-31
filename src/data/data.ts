import {
  Account,
  Revenue,
  Deductions,
  FraudulentDeductions,
  MedicareRate,
  CorpTaxRate,
  Declaration,
  Data
} from "./data.types"

const account: Account = {
  name: "Tycho Space Station",
  slogan: "The hoopiest shipyard in the galaxy!",
  ansibleNumber: "142-682-1828-443"
}

const revenue: Revenue = {
  january: 25000,
  february: 23500,
  march: 28000,
  april: 24800,
  may: 36400,
  june: 38300,
  july: 29700,
  august: 23500,
  september: 26400,
  october: 28500,
  november: 23200,
  december: 19500
}

const deductions: Deductions = {
  darkMatterGenerators: 38000,
  advertising: 15000,
  medicalSupplies: 45000,
  rocketFuel: 60000,
  laserBlasters: 24000
}

const fraudulentDeductions: FraudulentDeductions = [27000, 3000, 2600]

const medicareRate: MedicareRate = 0.015

const corpTaxRate: CorpTaxRate = 0.3

const declareIndepenceAndRefuseToPayTaxes: Declaration = false

const data: Data = {
  account,
  revenue,
  deductions,
  fraudulentDeductions,
  medicareRate,
  corpTaxRate,
  declareIndepenceAndRefuseToPayTaxes
}

export default data
