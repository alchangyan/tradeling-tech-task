import { SET_LOADING, UNSET_LOADING } from '../actionTypes';

const INITIAL_STATE = {
  isLoading: false,
};

type TLoader = typeof INITIAL_STATE;

const searchResults = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        isLoading: true,
      };
    case UNSET_LOADING:
      return {
        isLoading: false,
      };
    default:
      return state;
  }
};

export type { TLoader };
export default searchResults;
