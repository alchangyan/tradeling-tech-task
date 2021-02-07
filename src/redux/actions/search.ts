import { Dispatch } from 'redux';
import { githubApi } from '../../services/github-api';
import config from '../../config/default.json';
import { repositoriesParser, usersParser } from '../parsers';

import {
  SEARCH,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
  IS_SEARCHBAR_ACTIVE,
} from '../actionTypes';
import { setLoading } from './loader';

type RequestType = 'users' | 'repositories' | 'issues';

const fetchSearchResults = (type: RequestType, query: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(setLoading(true));
    dispatch({ type: SEARCH });

    const { path, get } = config.gitApi.search;

    try {
      const results = await githubApi('get', `${path}${get[type]}`, query);

      switch (type) {
        case 'users':
          usersParser(results);
          break;
        case 'repositories':
          repositoriesParser(results);
          break;
        case 'issues':
          repositoriesParser(results);
          break;
      }

      const payload = {};
      dispatch({ type: SEARCH_SUCCESS, payload });
      dispatch(setLoading(false));
    } catch (err) {
      dispatch({ type: SEARCH_FAILURE, err });
      dispatch(setLoading(false));
    }
  };
};

// @ts-ignore
export const searchForUsers = query => {
  return fetchSearchResults('users', query);
};

// @ts-ignore
export const searchForRepositories = query => {
  return fetchSearchResults('repositories', query);
};

// @ts-ignore
export const searchForIssues = query => {
  return fetchSearchResults('issues', query);
};

export const setIsSearchbarActive = (isActive: boolean) => {
  return {
    type: IS_SEARCHBAR_ACTIVE,
    payload: isActive,
  };
};
