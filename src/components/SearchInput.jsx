import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { setSearchValue } from "../store/searchSlice";
function SearchInput({ children }) {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search.searchValue);

  return (
    <div className="box">
      <input
        className="input_search"
        type="text"
        name="search"
        id="search"
        value={search}
        onChange={(e) => dispatch(setSearchValue(e.target.value))}
      />
      <label htmlFor="search" className="icon">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </label>
      {children}
    </div>
  );
}

export default SearchInput;
