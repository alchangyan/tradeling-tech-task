import {
  IS_SEARCHBAR_ACTIVE,
  SEARCH,
  SEARCH_FAILURE,
  SEARCH_SUCCESS,
  CLEAR_SEARCH_RESULTS,
} from '../actionTypes';
import { fetchSearchResults } from '../thunk';
import type { TSearchPayload, TSearchAction } from '../types';

export const searchForUsers = (query: string) => {
  return fetchSearchResults('users', query);
};

export const searchForRepositories = (query: string) => {
  return fetchSearchResults('repositories', query);
};

export const setIsSearchbarActive = (isActive: boolean) => {
  return {
    type: IS_SEARCHBAR_ACTIVE,
    payload: isActive,
  };
};

export const setSearch = () => {
  return { type: SEARCH };
};

export const setSearchSuccess = (payload: TSearchPayload): TSearchAction => {
  return { type: SEARCH_SUCCESS, payload };
};

export const setSearchFailure = (err: string): TSearchAction => {
  return { type: SEARCH_FAILURE, err };
};

export const clearResults = () => {
  return { type: CLEAR_SEARCH_RESULTS };
};
