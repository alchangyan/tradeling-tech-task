import {
  SEARCH,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
  IS_SEARCHBAR_ACTIVE,
  SET_LOADING,
  UNSET_LOADING,
  CLEAR_SEARCH_RESULTS,
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

export interface TRepositoryOwner {
  name: string;
  avatar: string;
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
  owner: TRepositoryOwner;
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
  | typeof UNSET_LOADING
  | typeof CLEAR_SEARCH_RESULTS;

export interface TSearchAction {
  type: TActionType | 'persist/REHYDRATE';
  payload?: TSearchPayload;
  err?: string;
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

// GitHub API responses

export interface TUserApiSchema {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: false;
}

export interface TRepositoryApiSchema {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: TUserApiSchema;
}

export interface TApiResponse {
  total_count: number;
  incomplete_results: boolean;
  items: (TUserApiSchema & { score: number })[] | TRepositoryApiSchema[];
}
