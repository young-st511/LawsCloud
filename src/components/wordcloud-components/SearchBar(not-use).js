import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SearchBar = ({search, setSearch}) => {
  // const [searchWord, setSearchWord] = useState(search);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setSearch(searchWord);
    // console.log("검색: " + searchWord);
  };

  return (
    <StyledWrapper search={search}>
      <form onSubmit={handleSubmit}>
        <input placeholder="검색" onChange={handleChange} value={search} />
        <input className="searchButton" aria-label="검색" type={"submit"} />
      </form>
    </StyledWrapper>
  );
};

SearchBar.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
};

export default SearchBar;

const StyledWrapper = styled.div`
  margin-bottom: 70px;

  form {
    position: relative;
    width: 709px;

    input {
      box-sizing: border-box;
      width: 709px;
      height: 42px;
      padding: 0 12px;
      border-radius: 10px;
      border: 1px solid #929292;
      font-size: 16px;
      font-weight: 300;
    }
  }
`;
