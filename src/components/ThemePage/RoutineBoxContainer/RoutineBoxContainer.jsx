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
//어디서 쓰는거지...? 확인 후 안쓰면 버리자. 뭔가 정리하려다 실패한것 같음.
