const account = {
  name: "Tycho Space Station",
  slogan: "The hoopiest shipyard in the galaxy!",
  ansibleNumber: "142-682-1828-443"
};

const revenue = {
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
};

const deductions = {
  darkMatterGenerators: 38000,
  advertising: 15000,
  medicalSupplies: 45000,
  rocketFuel: 60000,
  laserBlasters: 24000
};

const fraudulentDeductions = [27000, 3000, 2600];

const medicareRate = 0.015;

const corpTaxRate = 0.3;

const declareIndepenceAndRefuseToPayTaxes = false;

const data = {
  account,
  revenue,
  deductions,
  fraudulentDeductions,
  medicareRate,
  corpTaxRate,
  declareIndepenceAndRefuseToPayTaxes
};

export default data;
