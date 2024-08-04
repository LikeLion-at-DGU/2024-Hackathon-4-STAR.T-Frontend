import React from "react";
import { useSearchResult } from "@/hooks/useSearchResult";
import { SearchResultStar } from "@/components/MyStar/SearchResultStar";
import { useNavigate } from "react-router-dom";
import { SearchBox } from "@/components/SearchBox/SearchBox";

export const SearchResultP = () => {
  console.log("검색완료페이지 이동성공");
  const navigate = useNavigate();
  const { search } = useSearchResult();
  const resultData = search && search.data ? search.data : null;
  console.log("resultData:", resultData);
  const Category = Object.keys(resultData);

  const moveonStarPage = (url) => {
    navigate(`/api/celeb/${url}/`);
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
        {Category && Category.length > 0 ? (
          Category.map((key, index) => (
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
          ))
        ) : (
          <div>검색 결과가 없습니다.</div>
        )}
      </S.Container>
    </S.Layout>
  );
};
