import { combineReducers } from 'redux';
import search from './search';
import loader from './loader';

const rootReducer = combineReducers({
  search,
  loader,
});

export default rootReducer;
