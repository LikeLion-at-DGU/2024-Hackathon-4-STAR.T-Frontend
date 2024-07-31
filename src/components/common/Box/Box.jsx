import * as S from "./style";

export const Box = (props) => {
  return <S.Box onClick={props.onClick}>{props.children}</S.Box>;
};
