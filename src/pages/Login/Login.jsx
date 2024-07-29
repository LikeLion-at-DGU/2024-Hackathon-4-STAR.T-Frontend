import * as S from "./style";
import LOGIN_BACKGROUND from "../../assets/loginBackground.svg";
import LOGO_BACKGROUND from "../../assets/logoContainer.svg";
import KAKAO from "../../assets/KakaoLogin.svg";
import GOOGLE from "../../assets/GoogleLogin.svg";

export const Login = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;

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
        <form method="POST" action={`${BASE_URL}/accounts/kakao/login/`}>
          <S.LoginView>
            <S.ImageFame src={KAKAO} />
          </S.LoginView>
        </form>
        <form method="POST" action={`${BASE_URL}/accounts/google/login/`}>
          <S.LoginView>
            <S.ImageFame src={GOOGLE} />
          </S.LoginView>
        </form>
      </S.LoginContainer>
    </S.Layout>
  );
};
