import * as S from "./style";

export const Header = (props) => {
  return (
    <S.Header $padding={props.$padding} $margin={props.$margin}>
      <S.Title>{props.children}</S.Title>
    </S.Header>
  );
};
