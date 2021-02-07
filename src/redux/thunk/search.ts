import { Dispatch } from 'redux';

import { githubApi } from '../../services/github-api';
import config from '../../config/default.json';
import { repositoriesParser, usersParser } from '../parsers';
import type {
  TSearchPayload,
  TRepository,
  TQueryType,
  TStore,
  TUser,
} from '../types';
import { setLoading } from '../actions/loader';
import {
  setSearch,
  setSearchSuccess,
  setSearchFailure,
} from '../actions/search';

export const fetchSearchResults = (type: TQueryType, query: string) => {
  const formattedQuery = query.trim();

  return async (dispatch: Dispatch, getState: () => TStore) => {
    try {
      let data: TUser[] | TRepository[] = [];
      const { path, get } = config.gitApi.search;
      const store = getState();
      const { data: stateData, queries } = store.search;
      const existingQuery = queries.find(
        q => q.query === formattedQuery && q.queryType === type,
      );
      const isNewEntity = !existingQuery;

      dispatch(setLoading(true));
      dispatch(setSearch());

      if (!isNewEntity && existingQuery) {
        data = stateData[existingQuery.index];
      } else {
        const results = await githubApi(
          'get',
          `${path}${get[type]}`,
          formattedQuery,
        );

        switch (type) {
          case 'users':
            data = usersParser(results.items);
            break;
          case 'repositories':
            data = repositoriesParser(results.items);
            break;
          default:
            break;
        }
      }

      const payload: TSearchPayload = {
        isNewEntity,
        query: formattedQuery,
        queryType: type,
        data,
      };

      dispatch(setSearchSuccess(payload));
      dispatch(setLoading(false));
    } catch (err) {
      dispatch(setSearchFailure(err));
      dispatch(setLoading(false));
    }
  };
};
