# tradeling-tech-task :octocat:
Very simple GitHub searcher to search users and repositories.

## Table of Contents
- [Requirements](#Requirements)
- [Usage](#Usage)
- [Development environment](#Development-environment)
- [Implementation process](#Implementation-process)
- [Additional info](#Additional-info)

## Requirements
> Given requirements
- Use ReduxJS and redux-persist;
- No styling frameworks allowed;
- Use React Router;
- The results should be fetched from the GitHub API;
- README.md file explaining high level solution and any madeed decisions and the reasons behind them.

> Product behavior
- When the user doesn't have any input or clears the input, the input fields should be shown in the middle of the page;
- The data should be cached in the store and persisted via redux-persist and no more API calls should be made if we already have the results for the search term;
- Make the API calls only if the user has typed 3 or more characters. Use debounce;
- If the user changes the "Entity type" value in the dropdown and user has 3 or more characters in the input already, it should refresh the results;
- If the user clears the input or types less than three characters, clear the results and show the empty screen;
- For each repository display the repository user details returned from API and the repository name, author, stars and other statistics below it;
- For the users, show the profile picture, name, location, any other data you have and link to their profile;
- On smaller screens (width <= 768px), the grid will be 2 columns.

> Optional requirements
- Tests are not needed but will be a big plus.

## Usage
<details open>
<summary>with <b>yarn</b></summary>

```bash
# run application
yarn start

# build application
yarn build

# run tests
# also generates `jest-test-results.json` file for storybook
yarn test

# run test watching
yarn test:watch

# run storybook
yarn storybook

# build storybook
yarn build-storybook
```

</details>
<details>
<summary>with <b>npm</b></summary>

```bash
# run application
npm start

# build application
npm run build

# run tests
# also generates `jest-test-results.json` file for storybook
npm test

# run test watching
npm run test:watch

# run storybook
npm run storybook

# build storybook
npm run build-storybook
```
</details>

## Development environment

### Testing libraries
- [jest](https://jestjs.io/) - testing library already integrated RCA;
- [react-testing-library](https://testing-library.com/) - also integrated into RCA.

### Development
- [storybook](https://storybook.js.org/) - for testing and development of components and containers one by one.

### State management
- [redux](https://redux.js.org/) - to create communication between any level components and local storage management;
- [redux-thunk](https://github.com/reduxjs/redux-thunk) - ReduxJS middleware that allows to write asynchronous calls those will return response directly into your redux store;
- [redux-persist](https://github.com/rt2zz/redux-persist) - to persist and rehydrate a redux store.

### Tools
- [classnames](https://github.com/JedWatson/classnames) - to work with CSS classnames and keep them readable;
- [husky](https://github.com/typicode/husky) - to control working process with git-cli;
- [lint-staged](https://www.npmjs.com/package/lint-staged) - to run linters;
- [prettier](https://prettier.io/) - code formatter just to keep code neat and tidy.

### Styling
- [SASS](https://sass-lang.com/) - CSS extension language;
- [BEM methodology](http://getbem.com/) - imho the best approach to write styles in ReactJS in combination with SASS/LESS.

### Routing
- [react-router-dom](https://reactrouter.com/) - most popular routing library for ReactJS.

## Implementation process
>__Initialization__

I've started with configuration of my working environment to get what CRA can't give. I've installed `storybook` and configured it for testing too. I've installed `husky` in combination with `lint-staged` to run `prettier` before every commit I'll make.

>__Development__

To finilize configuration of my working environment I've developed my first `Grid` component to write tests and to have an ability to choose as the next component any I'll wish.

After getting initial versions of my components I've started configuration of `redux` to start development of my containers. In the scope of my task, testing `redux` without `redux-persist` and `redux-thunk` was not the best idea. I didn't know `redux-persist` and I never worked with GitHub API, so I spent some time to get information about their basik usage.

I've created simple button to make a call throughout `redux`, `redux-thunk` and `redux-persist` to check is there everything allright.

Using router without having another pages didn't make any sense to me so I've create 404 page just for fun.

I've used `App` component as a generic wrapper instead of creating separate layout component just because I had only two similar pages in general.

So, at this point I had complete working environment, initial versions of my components and containers, routing and working storage management functionality.

All I needed to do is to put them all together and add missing functionality.

So I did :)

At the end I ran over my code to note some further TODO's.

## Additional info
I didn't write unit-tests because I didn't have enough time.

Also I left some comments for strange TS cases and for some further improvements to finilize them later per request.

Thanks.

