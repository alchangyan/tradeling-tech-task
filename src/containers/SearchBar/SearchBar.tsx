import * as React from 'react';
import debounce from 'lodash.debounce';
import { useDispatch, useSelector } from 'react-redux';

import Input from '../../components/Input';
import Select from '../../components/Select';
import type { TStore } from '../../redux/types';
import {
  setIsSearchbarActive,
  searchForUsers,
  searchForRepositories,
  clearResults,
} from '../../redux/actions/search';

import './SearchBar.scss';

interface TSearchBarProps {}

const defaultProps = {};
const options = ['User', 'Repository'];

const SearchBar: React.FC<TSearchBarProps> = (): React.ReactElement<TSearchBarProps> => {
  const [inputValue, setInputValue] = React.useState('');
  const [selectValue, setSelectValue] = React.useState(options[0]);

  const dispatch = useDispatch();
  const { isSearchbarActive, err } = useSelector(
    (state: TStore) => state.search,
  );

  const handleInputChange = React.useMemo(
    () =>
      debounce((query, type) => {
        if (query.length > 2) {
          switch (type) {
            case 'User':
              dispatch(searchForUsers(query));
              break;
            case 'Repository':
              dispatch(searchForRepositories(query));
              break;
            default:
              break;
          }
        } else {
          dispatch(clearResults());
        }
      }, 250),
    [dispatch],
  );

  React.useEffect(() => {
    handleInputChange(inputValue, selectValue);
  }, [inputValue, selectValue, handleInputChange]);

  React.useEffect(() => {
    const isSearchbarActiveNew = !!inputValue.length;

    if (isSearchbarActiveNew !== isSearchbarActive) {
      dispatch(setIsSearchbarActive(isSearchbarActiveNew));
    }
  }, [inputValue, isSearchbarActive, dispatch]);

  return (
    <div className="search-bar">
      <Input
        width={360}
        placeholder="Start typing to search .."
        onChange={setInputValue}
        errorMessage={err}
      />
      <Select width={130} options={options} onChange={setSelectValue} />
    </div>
  );
};

SearchBar.defaultProps = defaultProps;

export type { TSearchBarProps };
export default SearchBar;
