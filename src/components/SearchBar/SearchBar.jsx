import { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-hot-toast";

import s from "./SearchBar.module.css";

function SearchBar({ onSubmit }) {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchValue.trim() === "") {
      toast.error("Please enter something to search.");
      return;
    }

    onSubmit(searchValue);
    setSearchValue("");
  };

  return (
    <header className={s.header}>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchValue}
          onChange={handleChange}
        />
        <button type="submit" className={s.button}>
          Search
        </button>
      </form>
    </header>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
