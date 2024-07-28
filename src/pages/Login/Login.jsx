import * as S from "./style";
import LOGIN_BACKGROUND from "../../assets/loginBackground.svg";
import LOGO_BACKGROUND from "../../assets/logoContainer.svg";
import KAKAO from "../../assets/KakaoLogin.svg";
import GOOGLE from "../../assets/GoogleLogin.svg";

export const Login = () => {
  return (
    <S.Layout
      style={{
        backgroundImage: `url(${LOGIN_BACKGROUND})`,
      }}
    >
      <S.TitleFrame>
        <S.TitleText>당신의 스타와 함께하는</S.TitleText>
        <S.TitleText>건강한 습관</S.TitleText>
      </S.TitleFrame>

      <S.LogoContainr>
        <S.ImageFame src={LOGO_BACKGROUND} />
      </S.LogoContainr>
      <S.LoginContainer>
        <S.LoginView href="https://www.kakao.com">
          <S.ImageFame src={KAKAO} />
        </S.LoginView>
        <S.LoginView href="https://www.google.com">
          <S.ImageFame src={GOOGLE} />
        </S.LoginView>
      </S.LoginContainer>
    </S.Layout>
  );
};
