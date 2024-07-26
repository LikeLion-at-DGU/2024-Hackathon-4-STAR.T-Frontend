import * as S from "./styled";
import { Header } from "../../components/common/Header/Header";
import { CustomCalendar } from "../../components/CustomCalendar/CustomCalendar";

export const Calendar = () => {
  return (
    <S.Layout>
      <Header>캘린더</Header>
      <CustomCalendar />
    </S.Layout>
  );
};
