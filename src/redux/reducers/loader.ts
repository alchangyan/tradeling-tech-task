import { SET_LOADING, UNSET_LOADING } from '../actionTypes';
import type { TLoader } from '../types';

const INITIAL_STATE: TLoader = {
  isLoading: false,
};

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

export default searchResults;
