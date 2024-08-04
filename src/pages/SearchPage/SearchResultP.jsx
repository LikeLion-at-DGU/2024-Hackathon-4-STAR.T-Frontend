import React, { useEffect, useState } from "react";
import { SearchResultStar } from "@/components/MyStar/SearchResultStar";
import { useNavigate, useParams } from "react-router-dom";
import { getSearchContent } from "@/apis/search";
import * as S from "./styled";
import SearchBox from "@/components/SearchBox/SearchBox";
import { Header } from "@/components/common/Header/Header";

export const SearchResultP = () => {
  const { data } = useParams();
  const [searchData, setSearchData] = useState({});
  const getSearchData = async () => {
    const search = await getSearchContent(data);
    setSearchData(search.data);
    console.log("search:", search);
  };
  useEffect(() => {
    getSearchData();
  }, [data]);
  console.log("data:", data);
  console.log("검색완료페이지 이동성공");
  const navigate = useNavigate();

  const filteredKeys = Object.keys(searchData);

  const handlesearchClick = (data) => {
    navigate(`/search/data/${data}`);
  };

  return (
    <S.Layout>
      <Header $margin={"1rem 0 0 0"} $padding={"1rem 1rem 0 1rem"}>
        검색
      </Header>
      <S.Container>
        <SearchBox onsearchResult={handlesearchClick} />
        {filteredKeys.map((key, index) => (
          <S.CategoryWrapper key={index}>
            <div className="Title">{key}</div>

            {searchData[key].map((item) => (
              <SearchResultStar
                key={item.id}
                id={item.url}
                src={item.image}
                name={item.title}
                profession={item.profession}
                type={key}
              />
            ))}
          </S.CategoryWrapper>
        ))}
      </S.Container>
    </S.Layout>
  );
};
