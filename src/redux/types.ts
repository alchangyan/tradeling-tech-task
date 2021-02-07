import {
  SEARCH,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
  IS_SEARCHBAR_ACTIVE,
  SET_LOADING,
  UNSET_LOADING,
} from './actionTypes';

export type TQueryType = 'users' | 'repositories';

export type TResults = (TUser | TRepository)[];

export interface TUser {
  id: number;
  type: 'user';
  avatar: string;
  name: string;
  href: string;
}

export interface TRepository {
  id: number;
  type: 'repository';
  name: string;
  href: string;
  language: string;
  description: string | null;
  lastUpdate: string;
  stars: number;
  owner: string;
}

export interface TSearchPayload {
  isNewEntity: boolean;
  query: string;
  queryType: TQueryType;
  data: TResults;
  search?: TSearch;
}

export type TActionType =
  | typeof SEARCH
  | typeof SEARCH_SUCCESS
  | typeof SEARCH_FAILURE
  | typeof IS_SEARCHBAR_ACTIVE
  | typeof SET_LOADING
  | typeof UNSET_LOADING;

export interface TSearchAction {
  type: TActionType | 'persist/REHYDRATE';
  payload?: TSearchPayload;
  err?: Error;
}

export interface TQuery {
  index: number;
  queryType: TQueryType;
  query: string;
}

export interface TSearch {
  isSearchbarActive: boolean;
  queries: TQuery[];
  data: (TUser[] | TRepository[])[];
  results: TResults;
  err: null;
}

export interface TLoader {
  isLoading: boolean;
}

export interface TStore {
  search: TSearch;
  loader: TLoader;
}
