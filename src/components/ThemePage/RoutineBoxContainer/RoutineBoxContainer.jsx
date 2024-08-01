import * as S from "./styled";
import MainRoutineBox from "../../mainRoutineBox/MainRoutineBox";

export const RoutineBoxContainer = ({ routine, onPlusButtonClick }) => {
  <S.RoutineBoxContainer>
    {routine.map((item) => (
      <MainRoutineBox
        key={item.id}
        src={item.image}
        title={item.title}
        subtitle={item.sub_title}
        content={item.content}
        term={item.term}
        onPlusButtonClick={onPlusButtonClick}
      />
    ))}
  </S.RoutineBoxContainer>;
};
