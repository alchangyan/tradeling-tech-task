import { addDecorator } from '@storybook/react'; // <- or your view layer
import { withTests } from '@storybook/addon-jest';
import "../src/index.scss";

import results from '../src/.jest-test-results.json';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

addDecorator(
  withTests({
    results,
    filesExt: ".test.tsx",
  })
);
