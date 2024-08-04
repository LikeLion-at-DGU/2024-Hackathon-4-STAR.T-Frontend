import React, { useState } from "react";
import * as S from "./styled";
import { Header } from "../../components/common/Header/Header";
import SearchBox from "../../components/SearchBox/SearchBox";
import { DUMMY_DATA, data, Title } from "../../constants/Search/dummy";
import { useNavigate } from "react-router-dom";
import SearchCategoryBox from "@/components/SearchCategoryBox/SearchCategoryBox";
const SearchPage = () => {
  const navigate = useNavigate();

  //검색결과확인
  const handlesearchClick = (data) => {
    navigate(`/search/data/${data}`);
  };

  //모아보기
  const moveOnCategoryPage = (sectionId, subCategoryId) => {
    navigate(`/subcategory/${sectionId}/${subCategoryId}`);
  };

  const data = [
    { id: "1", category: "K-pop" },
    { id: "2", category: "보이그룹" },
  ];

  const Title = [
    { id: "1", category: "스포츠" },
    { id: "2", category: "가수" },
  ];

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
        <SearchBox onsearchResult={handlesearchClick} />
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
