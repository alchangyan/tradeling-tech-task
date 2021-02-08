import { Dispatch } from 'redux';

import { githubApi } from '../../services/github-api';
import config from '../../config/default.json';
import logger from '../../helpers/logger';
import { repositoriesParser, usersParser } from '../parsers';
import type {
  TSearchPayload,
  TRepository,
  TQueryType,
  TStore,
  TUser,
  TApiResponse,
  TRepositoryApiSchema,
  TUserApiSchema,
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
        const results: TApiResponse = await githubApi(
          'get',
          `${path}${get[type]}`,
          formattedQuery,
        );

        let incomingResults;

        switch (type) {
          case 'users':
            incomingResults = results.items as TUserApiSchema[];
            data = usersParser(incomingResults);
            break;
          case 'repositories':
            incomingResults = results.items as TRepositoryApiSchema[];
            data = repositoriesParser(incomingResults);
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
      const errorMsg = `Received an error while getting ${type} from GitHub API. Please refresh the page and try again.`;

      logger(errorMsg, 'error');
      dispatch(setSearchFailure(errorMsg));
      dispatch(setLoading(false));
    }
  };
};
