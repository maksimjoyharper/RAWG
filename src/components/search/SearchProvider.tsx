import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useState,
  useMemo,
} from "react";

import { useDebounce } from "../cards/useDebounce";
import { ISearchContext } from "../../data/models";

const defaultValue: ISearchContext = {
  search: "",
  debounsedSearch: "",
  onSearch() {},
};

const SearchContext = createContext(defaultValue);

export const useSearchContext = () => {
  return useContext(SearchContext);
};

export const SearchProvider = ({ children }: PropsWithChildren) => {
  const [search, setSearch] = useState("");
  const debounsedSearch = useDebounce(search, 1000);

  const onSearch = useCallback((newSearch: string) => {
    setSearch(newSearch);
  }, []);

  const value = useMemo(() => {
    return { search, debounsedSearch, onSearch };
  }, [search, debounsedSearch, onSearch]);

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
