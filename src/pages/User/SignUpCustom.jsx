import * as S from "./style";
import BACKGROUND from "../../assets/background.svg";
import { ROUTINE_CATEGORY, TITLE } from "../../constants/Category/data";
import { Box } from "../../components/common/Box/Box";
import { Button } from "../../components/common/Button/Button";
import { categoryState } from "../../stores/category";
import { useRecoilState } from "recoil";
import { postAddRoutines } from "../../apis/signup";
import { useNavigate } from "react-router-dom";

export const SignUpCustom = () => {
  const navigate = useNavigate();
  const [categoryStatus, setCategoryStatus] = useRecoilState(categoryState);
  const handleClick = (index) => {
    setCategoryStatus((prevStatus) =>
      prevStatus.map((status, i) => (i === index ? !status : status))
    );
  };
  const isAnyCategorySelected = categoryStatus.some((status) => status);
  const handleSubmit = async () => {
    const preferredRoutineCategories = [];
    categoryStatus.map((status, i) => {
      if (status === true) {
        preferredRoutineCategories.push(i + 1);
      }
    });
    const isSuccess = await postAddRoutines(preferredRoutineCategories);
    if (isSuccess) {
      navigate("/");
    }
  };
  return (
    <S.Layout $url={BACKGROUND}>
      <S.TitleView>
        <S.CutomTitle>{TITLE[0]}</S.CutomTitle>
        <S.CustomP color="white">{TITLE[1]}</S.CustomP>
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
    </S.Layout>
  );
};
