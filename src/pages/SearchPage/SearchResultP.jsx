import React, { useState } from "react";
import { useSearchResult } from "@/hooks/useSearchResult";
import { SearchResultStar } from "@/components/MyStar/SearchResultStar";
import { useNavigate } from "react-router-dom";
import { SearchBox } from "@/components/SearchBox/SearchBox";

export const SearchResultP = () => {
  const navigate = useNavigate();
  const { result } = useSearchResult();
  const resultData = result.data;
  console.log("resultData:", resultData);
  const Category = Object.keys(resultData);

  const moveonStarPage = (id) => {
    navigate(`/api/celeb/${id}/`);
  };

  const handlesearchClick = (data) => {
    navigate(`/api/search?data=${data}`);
  };

  return (
    <S.Layout>
      <Header $margin={"1rem 0 0 0"} $padding={"1rem 1rem 0 1rem"}>
        검색
      </Header>
      <S.Container>
        <SearchBox onsearchResult={handlesearchClick} />
        {Category.map((key, index) => (
          <S.CategoryWrapper key={index}>
            <div className="Title">{Category[index]}</div>
            {resultData[key].map((item) => (
              <SearchResultStar
                key={item.id}
                id={item.id}
                src={item.src}
                name={item.title}
                profession={item.profession}
                onClick={() => moveonStarPage(item.url)}
              />
            ))}
          </S.CategoryWrapper>
        ))}
      </S.Container>
    </S.Layout>
  );
};
