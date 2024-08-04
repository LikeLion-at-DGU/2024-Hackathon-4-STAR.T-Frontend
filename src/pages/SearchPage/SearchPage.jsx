import React, { useState } from "react";
import * as S from "./styled";
import { Header } from "../../components/common/Header/Header";
import SearchBox from "../../components/SearchBox/SearchBox";
import { DUMMY_DATA, data, Title } from "../../constants/Search/dummy";
import { useNavigate } from "react-router-dom";
import SearchCategoryBox from "@/components/SearchCategoryBox/SearchCategoryBox";
import BaseBall from "@/assets/baseball.svg";
import Soccer from "@/assets/soccer.svg";
import BasketBall from "@/assets/basketball.svg";
import Kpop from "@/assets/k-pop.svg";
import Animation from "@/assets/animation.svg";
import Pop from "@/assets/pop.svg";
import Rapper from "@/assets/rapper.svg";
import actor from "@/assets/actor.svg";

const categories = [
  {
    title: "스포츠",
    sectionId: "1",
    items: [
      { src: Soccer, category: "축구", subCategoryId: "1", sectionId: "1" },
      { src: BaseBall, category: "야구", subCategoryId: "2", sectionId: "1" },
      { src: BasketBall, category: "농구", subCategoryId: "3", sectionId: "1" },
    ],
  },
  {
    title: "가수",
    sectionId: "2",
    items: [
      { src: Kpop, category: "K-pop", subCategoryId: "1", sectionId: "2" },
      { src: Pop, category: "Pop", subCategoryId: "2", sectionId: "2" },
      { src: Rapper, category: "래퍼", subCategoryId: "3", sectionId: "2" },
    ],
  },
  {
    title: "Entertainment",
    sectionId: "3",
    items: [
      { src: actor, category: "배우", subCategoryId: "1", sectionId: "3" },
      {
        src: Animation,
        category: "애니메이션",
        subCategoryId: "2",
        sectionId: "3",
      },
      {
        src: actor,
        category: "영화캐릭터",
        subCategoryId: "3",
        sectionId: "3",
      },
    ],
  },
];

const SearchPage = () => {
  const navigate = useNavigate();

  //검색결과확인
  const handlesearchClick = (data) => {
    console.log("searchPage에 들어오는 data값", data);
    navigate(`/search/data/${data}`);
  };

  //모아보기
  const moveOnCategoryPage = (sectionId, subCategoryId) => {
    navigate(`/subcategory/${sectionId}/${subCategoryId}`);
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
                subCategoryId={item.subCategoryId}
                sectionId={item.sectionId}
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
