import * as S from "./styled";
import CategoryTitle from "../../components/CategoryTitle/CategoryTitle";
import { useModal } from "../../hooks/UseModal";
import { useDateRange } from "../../hooks/useDateRange";
import { useMoveonTheme } from "../../hooks/useTheme";
import { RoutineBoxContainer } from "../../components/ThemePage/RoutineBoxContainer/RoutineBoxContainer";

const ThemePage = () => {
  const { theme } = useMoveonTheme();
  const { term, dateRange, handleCalendarConfirm } = useDateRange();
  const {
    isCalendarVisible,
    isCheckVisible,
    OpenCalendar,
    closeAll,
    openCheck,
  } = useModal();

  const {
    theme_img = "",
    theme_title = "",
    theme_content = "",
    routine = [],
  } = theme;

  return (
    <>
      <S.Header>
        <S.Bannerimage src={theme_img} alt={theme_title} />
        <S.BannerTitle>{theme_title} </S.BannerTitle>
      </S.Header>
      <S.descriptionContainer>
        <CategoryTitle section={theme_content} fontSize="15px" />
      </S.descriptionContainer>
      <RoutineBoxContainer routine={routine} onPlusButtonClick={OpenCalendar} />
      <ModalManager
        isCalendarVisible={isCalendarVisible}
        isCheckVisible={isCheckVisible}
        closeAll={closeAll}
        handleCalendarConfirm={handleCalendarConfirm}
        openCheck={openCheck}
        dateRange={dateRange}
        term={term}
      />
    </>
  );
};

export default ThemePage;
