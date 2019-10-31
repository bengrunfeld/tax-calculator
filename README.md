# Tax Calculator

## Test that the basic app works

1. Download code with `git clone git@github.com:bengrunfeld/tax-calculator.git`
2. To test that everything works, run `npm start`, then navigate to `localhost:8080` in your browser, and open your console. If you see a tax report there, everything works! =)

## Coding exercise (basic)

1. In `./tsconfig.json`, change the value of `strict` to `true`
2. Run `npm start`
3. Naviate through the wall of errors
4. If you get stuck, ask for help from one of the seniors walking around or you can check out the solution in the `with-typescript` branch with the command: `git checkout with-typescript`
5. Exercise is finished when report prints out in browser console as expected

## Coding exercise (intermediate)

1. Run `git checkout with-untyped-library`
2. Ensure `strict: true` in `tsconfig.json`
3. Run `npm start`
4. Navigate through the errors until the report prints out properly in the browser console
5. If you get stuck, ask for help, or you can have a look at my solution in the `with-delcaration-file` branch
   and CSS files are all minified and uglified, and images are encoded as Base64 directly into your CSS file, which results in less calls to the server for image files.

### For testing

    npm test                // runs test
    npm run coverage        // generates a coverage report

## Security

Please ensure that your version of Node and NPM are up to date, and run `npm audit` after installation to ensure that no vulnerabilities exist. If they do, follow the audits instructions on how to resolve them.
