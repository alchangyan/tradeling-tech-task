import { SET_LOADING, UNSET_LOADING } from '../actionTypes';

export const setLoading = (newState: boolean) => {
  return {
    type: newState ? SET_LOADING : UNSET_LOADING,
  };
};
