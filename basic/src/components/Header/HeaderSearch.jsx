import React from "react";
import styled from "styled-components";

const SearchBox = styled.div``;
const SearchInput = styled.input`
  padding: 10px;
  width: 500px;
  border-radius: 10px;
`;

const HeaderSearch = () => {
  return (
    <div>
      <SearchInput type="text" placeholder="검색창테스트" />
    </div>
  );
};

export default HeaderSearch;
