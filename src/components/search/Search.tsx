import { useSearchContext } from "../search/SearchProvider";
import "./styleSearch.css";

export const Search = () => {
  const { search, onSearch } = useSearchContext();

  return (
    <>
      <div className="search-box">
        <input
          value={search}
          type="text"
          id="input_search"
          placeholder="Search"
          onChange={(event) => {
            onSearch(event.target.value);
          }}
        />
      </div>
    </>
  );
};
