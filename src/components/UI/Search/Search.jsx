import React from "react";
import classes from "./Search.module.scss";
import { ReactComponent as SearchIcon } from "../../../images/icon-search.svg";

class Search extends React.Component {
  render() {
    return (
      <form className={classes["search"]}>
        <span className={classes["search__icon"]}>
          <SearchIcon className="small-mob-svg" />
        </span>
        <input
          type="search"
          className={classes["search__input"]}
          placeholder="Search"
        />
      </form>
    );
  }
}

export default Search;
