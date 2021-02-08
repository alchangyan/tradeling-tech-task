import {
  SEARCH,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
  IS_SEARCHBAR_ACTIVE,
  CLEAR_SEARCH_RESULTS,
} from '../actionTypes';
import type { TSearchAction, TSearch } from '../types';

const INITIAL_STATE: TSearch = {
  isSearchbarActive: false,
  queries: [],
  data: [],
  results: [],
  err: null,
};

const searchResults = (
  state = INITIAL_STATE,
  { type, payload, err }: TSearchAction,
) => {
  switch (type) {
    case 'persist/REHYDRATE':
      const persistedState = payload && payload.search ? payload.search : state;

      return {
        ...persistedState,
        err: null,
        results: [],
        isSearchbarActive: false,
      };
    case SEARCH:
      return {
        ...state,
        err: null,
      };
    case SEARCH_SUCCESS:
      if (payload) {
        const { isNewEntity, query, queryType, data } = payload;

        const newState = { ...state };

        if (isNewEntity) {
          // TODO: fix type error
          // @ts-ignore
          newState.data.push(data);
          newState.queries.push({
            index: newState.data.length - 1,
            queryType,
            query,
          });
        }
        newState.results = data;

        return {
          ...newState,
        };
      }

      return {
        ...state,
      };
    case SEARCH_FAILURE:
      return {
        ...state,
        err,
      };
    case CLEAR_SEARCH_RESULTS:
      return {
        ...state,
        results: [],
        err: null,
      };
    case IS_SEARCHBAR_ACTIVE:
      const isActive = payload;

      return {
        ...state,
        isSearchbarActive: isActive,
        results: isActive ? state.results : [],
      };
    default:
      return state;
  }
};

export type { TSearch };
export default searchResults;
