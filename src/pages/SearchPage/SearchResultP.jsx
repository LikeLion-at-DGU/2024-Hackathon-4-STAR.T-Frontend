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
  const navigate = useNavigate();
  const getSearchData = async () => {
    const search = await getSearchContent(data);
    setSearchData(search.data);
    console.log("search:", search);
  };
  useEffect(() => {
    getSearchData();
  }, [data]);
  console.log("data:", data);

  const filteredKeys = Object.keys(searchData);

  const handlesearchClick = (data) => {
    navigate(`/search/data/${data}`);
  };

  const moveOnSearch = () => {
    console.log("헤더클릭");
    navigate(`/search`);
  };
  const handleClick = (id, type) => {
    let url = "";
    switch (type) {
      case "인물":
      case "루틴":
        url = `/star/${id}`;
        break;
      case "테마":
        url = `/theme/${id}`;
        break;
      default:
        break;
    }
    navigate(url);
  };
  return (
    <S.LayoutResult>
      <Header $margin={"1rem 0 0 0"} $padding={"1rem 1rem 0 1rem"}>
        <div onClick={moveOnSearch}>검색</div>
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
                onClick={() => handleClick(item.url, key)}
              />
            ))}
          </S.CategoryWrapper>
        ))}
      </S.Container>
    </S.LayoutResult>
  );
};
