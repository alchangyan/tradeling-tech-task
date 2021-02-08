import React from 'react';
import { render, cleanup, RenderResult } from '@testing-library/react';
import Grid, { TGridProps } from './index';

interface TGetComponentResult {
  wrapper: RenderResult;
  container: HTMLElement;
  comp: HTMLElement;
}

let comp: HTMLElement;
let props: TGridProps = {};
let wrapper: RenderResult;
let container: HTMLElement;

const getComponent = (): TGetComponentResult => {
  wrapper = render(<Grid {...props} />);
  ({ container } = wrapper);
  comp = container.firstChild as HTMLElement;

  return {
    wrapper,
    container,
    comp,
  };
};

beforeEach(cleanup);
afterEach(cleanup);

describe('Grid', () => {
  it('renders correctly', () => {
    getComponent();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders childs', () => {
    props = { pattern: { lg: 'auto auto auto' } };
    getComponent();
    expect(comp.style.gridTemplateColumns).toEqual('auto auto auto');
  });

  it('ignores `colCount` property', () => {
    const expectedResult = '1fr 2fr 1fr';
    props = { pattern: { lg: expectedResult } };
    getComponent();
    expect(comp.style.gridTemplateColumns).toEqual(expectedResult);
  });
});
