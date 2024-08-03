import BACKGROUND from "../../assets/background.svg";
import React, { useState, useEffect } from "react";
import * as S from "./styled";
import { ROUTINE_CATEGORY, TITLE } from "../../constants/Category/data";
import { useNavigate } from "react-router-dom";
import { Box } from "../common/Box/Box";
import { Button } from "../../components/common/Button/Button";

import { patchroutineCategory, getRoutineCategory } from "../../apis/mypage";
const ChangeRoutine = () => {
  const navigate = useNavigate();
  const [isAnyCategorySelected, setIsAnyCategorySelected] = useState(false);
  const [categoryStatus, setCategoryStatus] = useState([]);

  const initialCategory = async () => {
    try {
      const getData = await getRoutineCategory();
      console.log("getData:", getData);
      const initialStatus = ROUTINE_CATEGORY.map((_, index) =>
        getData.data.preferred_routine_categories.some(
          (preferred) => preferred.id - 1 === index
        )
      );

      setCategoryStatus(initialStatus);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    initialCategory();
  }, []);
  //initialStatus는 true,false로 구성된 배열

  // [{id:1, name:name},{id, name}...]

  const handleClick = (index) => {
    setCategoryStatus((prevStatus) =>
      prevStatus.map((status, i) => (i === index ? !status : status))
    );
  };

  const handleSubmit = async () => {
    const selectedCategories = [];
    categoryStatus.map((status, i) => {
      if (status === true) {
        selectedCategories.push(i + 1);
      }
    });
    const isSuccess = await patchroutineCategory(selectedCategories);
    if (isSuccess) {
      navigate("/mypage");
    }
  };
  useEffect(() => {
    setIsAnyCategorySelected(categoryStatus.some((status) => status));
  }, [categoryStatus]);

  return (
    <S.RoutineLayout $url={BACKGROUND}>
      <S.TitleView>
        <S.CutomTitle>{TITLE[0]}</S.CutomTitle>
      </S.TitleView>
      <S.CategoryView>
        {ROUTINE_CATEGORY.map((category, index) => (
          <Box
            onClick={() => handleClick(index)}
            $select={categoryStatus[index]}
            key={index}
          >
            {category}
          </Box>
        ))}
      </S.CategoryView>
      <S.SelectView>
        <Button
          width="50%"
          height="40px"
          $radius="15px"
          $background="rgba(196, 217, 226, 0.50)"
          onClick={handleSubmit}
          $isDisabled={!isAnyCategorySelected}
        >
          <S.CustomP color="white">확인</S.CustomP>
        </Button>
      </S.SelectView>
    </S.RoutineLayout>
  );
};
export default ChangeRoutine;
