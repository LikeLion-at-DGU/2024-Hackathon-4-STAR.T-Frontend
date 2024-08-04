import React, { useEffect, useState } from "react";
import * as S from "./styled";
import { getSearchContent } from "@/apis/search";
import { Header } from "../../components/common/Header/Header";
import { useParams } from "react-router-dom";
import { SearchResultStar } from "@/components/MyStar/SearchResultStar";
const SubCategoryPage = () => {
  const { sectionTitle, subCategory } = useParams();
  const [searchData, setSearchData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getSearchContent(subCategory);
        setSearchData(res.data);
      } catch (err) {
        console.error("Error:", err);
      }
    };

    fetchData();
  }, [subCategory]);

  const filteredKeys = Object.keys(searchData);
  return (
    <S.Layout>
      <Header $margin={"1rem 0 0 0"} $padding={"1rem 1rem 0 1rem"}>
        {`${sectionTitle} / ${subCategory}`}
      </Header>
      <S.Container>
        {searchData ? (
          filteredKeys.map((key, index) => (
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
          ))
        ) : (
          <div>Loading...</div>
        )}
      </S.Container>
    </S.Layout>
  );
};

export default SubCategoryPage;
