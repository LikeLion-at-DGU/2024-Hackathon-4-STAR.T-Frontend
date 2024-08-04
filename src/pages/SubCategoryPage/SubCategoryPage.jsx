import React from "react";
import * as S from "./styled";
import { Header } from "../../components/common/Header/Header";
import { useParams } from "react-router-dom";
import { DUMMY_DATA, data, Title } from "../../constants/Search/dummy";
//
const SubCategoryPage = () => {
  const sections = [
    { title: Title[0], data: DUMMY_DATA },
    { title: Title[1], data: data },
  ];

  const { sectionId, subCategoryId } = useParams();
  const parsedSectionId = parseInt(sectionId, 10); //dummy에 문자열로 해놔서 일단 넣어뒀습니다.
  const parsedSubCategoryId = parseInt(subCategoryId, 10);

  console.log("sectionId:", sectionId);
  console.log("subCategoryId:", subCategoryId);

  const selectedSection = sections.find(
    (section) => parseInt(section.title.id, 10) === parsedSectionId
  );

  const selectedSubCategory = selectedSection.data.find(
    (category) => parseInt(category.id, 10) === parsedSubCategoryId
  );

  return (
    <S.Layout>
      <Header $margin={"1rem 0 0 0"} $padding={"1rem 1rem 0 1rem"}>
        {selectedSection.title.category}/{selectedSubCategory.category}
      </Header>
    </S.Layout>
  );
};

export default SubCategoryPage;
