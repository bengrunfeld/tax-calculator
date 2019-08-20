# Tax Calculator

## Coding Exercise:

1. Implement types on the data file 
2. Implement types on the tax calculator file
3. Business name and slogan were forgotten in the Tax Report. Implement a solution that would have avoided this.

Use the following for info on how to calc tax:

https://www.business.gov.au/change-and-growth/restructuring/sole-trader-to-a-company/difference-between-a-sole-trader-and-a-company/how-is-tax-calculated

https://www.youtube.com/watch?v=19f9mgPFDlU

## Texpack - TypeScript, Express and Webpack Boilerplate

Texpack is a bare-bones TypeScript, Express, and Webpack boilerplate with ES6+ babel transpilation, ESLint, Hot Module Reloading, and Jest test framework enabled.

Texpack has two build modes: Development and Production.

When you run `npm run buildDev`, Javascript, HTML, and CSS files are unminified and not uglified, meaning that you can easily inspect them in Chrome Dev Tools. Hot Module Reloading is enabled via `webpack-dev-middleware` and `webpack-hot-middleware`. 

When you run `npm run buildProd`, Javascript, HTML, and CSS files are all minified and uglified, and images are encoded as Base64 directly into your CSS file, which results in less calls to the server for image files.

### For testing

    npm test                // runs test
    npm run coverage        // generates a coverage report

## Security

Please ensure that your version of Node and NPM are up to date, and run `npm audit` after installation to ensure that no vulnerabilities exist. If they do, follow the audits instructions on how to resolve them. 
