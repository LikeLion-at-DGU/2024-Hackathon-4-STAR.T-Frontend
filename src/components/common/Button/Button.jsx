import * as S from "./style";

export const Button = (props) => {
  return (
    <S.Button
      width={props.width}
      height={props.height}
      $padding={props.$padding}
      $margin={props.$margin}
      $radius={props.$radius}
      $background={props.$background}
      onClick={props.onClick}
      $isDisabled={props.$isDisabled}
      disabled={props.$isDisabled}
    >
      {props.children}
    </S.Button>
  );
};
