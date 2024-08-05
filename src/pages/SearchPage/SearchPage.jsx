import React from "react";
import * as S from "./styled";
import { Header } from "../../components/common/Header/Header";
import SearchBox from "../../components/SearchBox/SearchBox";
import { useNavigate } from "react-router-dom";
import SearchCategoryBox from "@/components/SearchCategoryBox/SearchCategoryBox";

import { categories } from "@/constants/Search/dummy";
const SearchPage = () => {
  const navigate = useNavigate();

  //검색결과확인
  const handlesearchClick = (data) => {
    console.log("searchPage에 들어오는 data값", data);
    navigate(`/search/data/${data}`);
  };

  //모아보기
  const handleCategoryClick = (sectionTitle, subCategory) => {
    navigate(`/subcategory/${sectionTitle}/${subCategory.category}`);
  };

  return (
    <S.Layout>
      <Header $margin={"1rem 0 0 0"} $padding={"1rem 1rem 0 1rem"}>
        검색
      </Header>
      <S.Container>
        <SearchBox onsearchResult={handlesearchClick} />
        {categories.map((category, index) => (
          <S.CategoryWrapper key={index}>
            <div className="Title">{category.title}</div>
            {category.items.map((item) => (
              <SearchCategoryBox
                key={item.subCategoryId}
                src={item.src}
                category={item.category}
                onClick={() => handleCategoryClick(category.title, item)}
              />
            ))}
          </S.CategoryWrapper>
        ))}
      </S.Container>
    </S.Layout>
  );
};

export default SearchPage;
