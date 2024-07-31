import * as S from "./style";
import LOGIN_BACKGROUND from "../../assets/loginBackground.svg";
import LOGO_BACKGROUND from "../../assets/logoContainer.svg";
import KAKAO from "../../assets/KakaoLogin.svg";
import GOOGLE from "../../assets/GoogleLogin.svg";
import { TITLE_TEXT } from "../../constants/Text/title";
import GradientBackground from "../../components/GradientBackground/GradientBackground";
export const Login = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const showContent = true;
  return (
    <S.Layout>
      <GradientBackground showContent={showContent} />
      <S.TitleFrame>
        <S.TitleText>{TITLE_TEXT[0]}</S.TitleText>
        <S.TitleText>{TITLE_TEXT[1]}</S.TitleText>
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

// 루틴까지 설정된 유저인지 검증하는 로직 필요
