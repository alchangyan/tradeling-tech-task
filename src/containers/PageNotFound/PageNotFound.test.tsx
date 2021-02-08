import React from 'react';
import {
  render,
  cleanup,
  RenderResult,
  fireEvent,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import PageNotFound from './index';
const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

interface TGetComponentResult {
  wrapper: RenderResult;
  container: HTMLElement;
  comp: HTMLElement;
}

let comp: HTMLElement;
let wrapper: RenderResult;
let container: HTMLElement;

const getComponent = (): TGetComponentResult => {
  wrapper = render(
    <MemoryRouter>
      <PageNotFound />
    </MemoryRouter>,
  );

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

describe('PageNotFound', () => {
  it('renders correctly', () => {
    getComponent();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('calls history.push', () => {
    getComponent();
    fireEvent.click(wrapper.getByRole('button'));
    expect(mockHistoryPush).toHaveBeenCalledWith('/');
  });
});
