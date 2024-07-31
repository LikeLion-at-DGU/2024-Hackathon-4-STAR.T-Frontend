import * as S from "./style";
import BACKGROUND from "../../assets/loginBackground.svg";
import { ROUTINE_CATEGORY } from "../../constants/Category/data";
import { Box } from "../../components/common/Box/Box";

export const SelectRoutine = () => {
  return (
    <S.Layout
      style={{
        backgroundImage: `url(${BACKGROUND})`,
      }}
    >
      <S.CategoryView>
        {ROUTINE_CATEGORY.map((category, index) => (
          <Box onClick={() => console.log("state management part")} key={index}>
            {category}
          </Box>
        ))}
      </S.CategoryView>
    </S.Layout>
  );
};
