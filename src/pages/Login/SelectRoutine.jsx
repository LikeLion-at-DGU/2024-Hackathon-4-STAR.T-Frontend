import * as S from "./style";
import BACKGROUND from "../../assets/background.svg";
import { ROUTINE_CATEGORY, TITLE } from "../../constants/Category/data";
import { Box } from "../../components/common/Box/Box";
import { Button } from "../../components/common/Button/Button";
import { getUserStatus } from "../../apis/signup";
import { useEffect } from "react";

export const SelectRoutine = () => {
  const getData = async () => {
    const res = await getUserStatus();
    console.log(res.data[0].is_new_user);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <S.Layout $url={BACKGROUND}>
      <S.TitleView>
        <S.CutomTitle>{TITLE[0]}</S.CutomTitle>
        <S.CustomP color="white">{TITLE[1]}</S.CustomP>
      </S.TitleView>
      <S.CategoryView>
        {ROUTINE_CATEGORY.map((category, index) => (
          <Box onClick={() => console.log("state management part")} key={index}>
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
          onClick={() => {
            console.log("select zone");
          }}
        >
          <S.CustomP color="white">확인</S.CustomP>
        </Button>
      </S.SelectView>
    </S.Layout>
  );
};

// 비동기 상태 돌리고
// 이행 && new_user 이면 -> routine 선택
// 아니면 main 리다이렉트
