import React, { useState } from "react";
import * as S from "./styled";
import { Header } from "../../components/common/Header/Header";
import SearchBox from "../../components/SearchBox/SearchBox";
import SearchCategoryBox from "../../components/SearchCategoryBox/SearchCategoryBox";
import { DUMMY_DATA, data, Title } from "../../constants/Search/dummy";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  const navigate = useNavigate();

  const moveOnCategoryPage = (sectionId, subCategoryId) => {
    navigate(`/subcategory/${sectionId}/${subCategoryId}`);
  };

  const sections = [
    { title: Title[0], data: DUMMY_DATA },
    { title: Title[1], data: data },
  ];
  return (
    <S.Layout>
      <Header $margin={"1rem 0 0 0"} $padding={"1rem 1rem 0 1rem"}>
        검색
      </Header>
      <S.Container>
        <SearchBox />
        {sections.map((section, index) => (
          <S.CategoryWrapper key={index}>
            <div className="Title">{section.title.category}</div>
            {section.data.map((item) => (
              <SearchCategoryBox
                key={item.id}
                src={item.src}
                subCategoryId={item.id}
                category={item.category}
                sectionId={section.title.id} // sectionId 전달
                onClick={moveOnCategoryPage}
              />
            ))}
          </S.CategoryWrapper>
        ))}
      </S.Container>
    </S.Layout>
  );
};

export default SearchPage;
