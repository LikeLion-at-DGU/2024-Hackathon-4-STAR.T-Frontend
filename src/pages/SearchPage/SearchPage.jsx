import React, { useState } from "react";
import * as S from "./styled";
import { Header } from "../../components/common/Header/Header";
import SearchBox from "../../components/SearchBox/SearchBox";
import SearchCategoryBox from "../../components/SearchCategoryBox/SearchCategoryBox";
import { DUMMY_DATA, data } from "../../constants/Search/dummy";
const SearchPage = () => {
  return (
    <S.Layout>
      <Header $margin={"1rem 0 0 0"} $padding={"1rem 1rem 0 1rem"}>
        검색
      </Header>
      <S.Container>
        <SearchBox />
        <S.CategoryWrapper>
          <div className="Title">스포츠</div>
          {DUMMY_DATA.map((item) => (
            <SearchCategoryBox
              key={item.id}
              src={item.src}
              category={item.category}
            />
          ))}
        </S.CategoryWrapper>
        <S.CategoryWrapper>
          <div className="Title">K-pop</div>
          {data.map((item) => (
            <SearchCategoryBox key={item.id} category={item.category} />
          ))}
        </S.CategoryWrapper>
      </S.Container>
    </S.Layout>
  );
};

export default SearchPage;
