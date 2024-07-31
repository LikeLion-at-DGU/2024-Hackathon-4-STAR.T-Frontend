import * as S from "./style";

export const Header = (props) => {
  return (

    <S.Header
      $padding={props.$padding}
      $margin={props.$margin}
      color={props.color}
    >

      <S.Title>{props.children}</S.Title>
    </S.Header>
  );
};
