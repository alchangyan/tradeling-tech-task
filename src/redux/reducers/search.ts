import {
  SEARCH,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
  IS_SEARCHBAR_ACTIVE,
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
        query: '',
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
        console.log(isNewEntity);

        const newState = { ...state };

        if (isNewEntity) {
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
    case IS_SEARCHBAR_ACTIVE:
      return {
        ...state,
        isSearchbarActive: payload,
        results: payload ? state.results : [],
      };
    default:
      return state;
  }
};

export type { TSearch };
export default searchResults;
