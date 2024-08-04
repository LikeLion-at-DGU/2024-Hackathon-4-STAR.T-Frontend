import React, { useEffect, useState } from "react";
import * as S from "./styled";
import { getSearchContent } from "@/apis/search";
import { Header } from "../../components/common/Header/Header";
import { useParams } from "react-router-dom";
import { SearchResultStar } from "@/components/MyStar/SearchResultStar";
const SubCategoryPage = () => {
  const { section, subCategory } = useParams();
  console.log("useParams로 불러온 get할 data", subCategory);
  const [searchData, setSearchData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getSearchContent(subCategory);
        console.log("서브카테고리P에서 불러온 값", res.data);
        setSearchData(res.data);
      } catch (err) {
        console.error("Error:", err);
      }
    };

    fetchData();
  }, [subCategory]);

  if (!searchData) {
    return <div>Loading...</div>;
  }

  const { celeb } = searchData;
  return (
    <S.Layout>
      <Header $margin={"1rem 0 0 0"} $padding={"1rem 1rem 0 1rem"}>
        {`${section} / ${subCategory}`}
      </Header>
      <S.Container>
        {celeb ? (
          <S.CategoryWrapper>
            {celeb.map((item) => (
              <SearchResultStar
                key={item.id}
                id={item.url}
                src={item.image}
                name={item.title}
                profession={item.profession}
                type={"celeb"}
              />
            ))}
          </S.CategoryWrapper>
        ) : (
          <div>Loading...</div>
        )}
      </S.Container>
    </S.Layout>
  );
};

export default SubCategoryPage;
