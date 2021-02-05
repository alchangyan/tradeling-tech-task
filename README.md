# tradeling-tech-task :octocat:
## Legend:
- [Usage](#Usage)
- [Environment](#Environment)
- [Tools](#Tools)
- [Implementation](#Implementation)

## Usage:
__run application__
```bash
yarn start / npm start
```

__run tests__
```bash
yarn test / npm test
```

__build application__
```bash
yarn build / npm run build
```

## Environment:
- [prettier](https://prettier.io/) - code formatter just to keep code neat and tidy

## Tools:
- [classnames](https://github.com/JedWatson/classnames) - to work with CSS classnames and keep it readable (can't live without this tool ❤️)

## Implementation:

### ___Environment configuration___:

added storybook
configured storybook for showing testing results
added lint-staged and husky in combination with prettier
I've used `App` component as a generic wrapper instead of creating separate layout component just because I have only two simlar pages in general.
