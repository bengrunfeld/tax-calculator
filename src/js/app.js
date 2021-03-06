import { generateReport, calculateTax, displayReport } from "./";
import { data } from "../data";
import "../css/style.css";

const runApp = () => {
  const taxResults = calculateTax(data);

  const report = generateReport(taxResults, data);

  displayReport(report);
};

export default runApp;
