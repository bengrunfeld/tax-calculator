# Tax Calculator

## Test that the basic app works

1. Download code with `git clone https://github.com/bengrunfeld/tax-calculator.git`
2. `npm install`
3. `npm run buildDev`
4. To test that everything works, run `npm start`, then navigate to `localhost:8080` in your browser, and open your console. If you see a tax report there, everything works! =)

## Coding exercise (basic)

1. In `./tsconfig.json`, change the value of `strict` to `true`
2. Run `npm start`
3. Naviate through the wall of errors
4. If you get stuck, ask for help from one of the seniors walking around or you can check out the solution in the `with-typescript` branch with the command: `git checkout with-typescript`
5. Exercise is finished when report prints out in browser console as expected

## Coding exercise (intermediate)

1. Run `git checkout with-untyped-library`
2. Run `npm install --save ts-tax-calc`
3. Ensure `strict: true` in `tsconfig.json`
4. Run `npm start`
5. Navigate through the errors until the report prints out properly in the browser console
6. If you get stuck, ask for help, or you can have a look at my solution in the `with-delcaration-file` branch
