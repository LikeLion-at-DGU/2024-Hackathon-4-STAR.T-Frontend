import React, { useEffect, useState } from "react";
import * as S from "./styled";
import { getSearchContent } from "@/apis/search";
import { Header } from "../../components/common/Header/Header";
import { useParams, useNavigate } from "react-router-dom";
import { SearchResultStar } from "@/components/MyStar/SearchResultStar";
import { useRecoilState } from "recoil";
import { isLoading } from "@/stores/loading";
import { Loading } from "../Loading/Loading";

const SubCategoryPage = () => {
  const { section, subCategory } = useParams();
  const [loadingStatus, setLoadingStatus] = useRecoilState(isLoading);
  const [searchData, setSearchData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingStatus(true);
        const res = await getSearchContent(subCategory);
        setSearchData(res.data);
      } catch (err) {
        console.error("Error:", err);
      } finally {
        setLoadingStatus(false);
      }
    };

    fetchData();
  }, [subCategory, setLoadingStatus]);

  if (loadingStatus) {
    return <Loading />;
  }

  const { 인물 } = searchData;

  const moveOnSearch = () => {
    navigate("/search");
  };

  const moveOnStarP = (id) => {
    navigate(`/star/${id}`);
  };

  return (
    <S.Layout>
      <Header $margin={"1rem 0 0 0"} $padding={"1rem 1rem 0 1rem"}>
        <div onClick={moveOnSearch}>{`${section} / ${subCategory}`}</div>
      </Header>
      <S.Container>
        {인물 && 인물.length > 0 ? (
          <S.CategoryWrapper>
            {인물.map((item) => (
              <SearchResultStar
                key={item.id}
                id={item.url}
                src={item.image}
                name={item.title}
                profession={item.profession}
                type={인물}
                onClick={() => moveOnStarP(item.url)}
              />
            ))}
          </S.CategoryWrapper>
        ) : (
          <div>No results found.</div>
        )}
      </S.Container>
    </S.Layout>
  );
};

export default SubCategoryPage;
