import { combineReducers } from 'redux';
import search, { TSearch } from './search';
import loader, { TLoader } from './loader';

const rootReducer = combineReducers({
  search,
  loader,
});

export type { TSearch, TLoader };
export default rootReducer;
