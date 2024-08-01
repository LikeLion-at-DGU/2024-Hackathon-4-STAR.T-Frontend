import * as S from "./style";

export const Box = (props) => {
  return (
    <S.Box onClick={props.onClick} $select={props.$select}>
      {props.children}
    </S.Box>
  );
};
