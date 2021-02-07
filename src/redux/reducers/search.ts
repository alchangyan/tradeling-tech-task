import {
  SEARCH,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
  IS_SEARCHBAR_ACTIVE,
} from '../actionTypes';
import { Action } from 'redux';

const INITIAL_STATE = {
  isSearchbarActive: true,
  data: [],
  err: null,
};

type TSearch = typeof INITIAL_STATE;

// @ts-ignore
const searchResults = (state = INITIAL_STATE, { type, payload, err }) => {
  switch (type) {
    case SEARCH:
      return {
        ...state,
        err: null,
        isSearchbarActive: false,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        data: [...payload],
      };
    case SEARCH_FAILURE:
      return {
        ...state,
        err,
      };
    case IS_SEARCHBAR_ACTIVE:
      return {
        ...state,
        isSearchbarActive: payload,
      };
    default:
      return state;
  }
};

export type { TSearch };
export default searchResults;
