import * as S from "./styledSignup";
import React, { useState } from "react";
import Logo1 from "../../assets/images/loading_logo(1).svg";
import Logo2 from "../../assets/images/loading_logo(2).svg";
import PrivacyContainer from "../../components/PrivacyContainer/PrivacyContainer";
import { postSetInfo } from "../../apis/signup";
import { useNavigate } from "react-router-dom";
import { useCheckUser } from "@/hooks/useCheckUser";
import { useRecoilState } from "recoil";
import { agree1, agree2 } from "@/stores/signup";

export const SignUp = () => {
  const isSigned = useCheckUser();
  const texts = ["이용약관", "개인정보 처리방침"];
  const [firstCheck, setFirstCheck] = useRecoilState(agree1);
  const [secondCheck, setSecondCheck] = useRecoilState(agree2);
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  const handleArrowClick = (text) => {
    if (text === "이용약관") {
      navigate("/agree/0");
    } else {
      navigate("/agree/1");
    }
  };

  const handleBackBtnClick = () => {
    setIsFormVisible(true);
    setSelectedText(null);
  };

  const handleNicknameChange = (event) => {
    setNickname(event.target.value);
  };

  const handleSubmit = async () => {
    if (nickname.trim() === "") {
      console.log("error");
    }
    const isSuccess = await postSetInfo(nickname);
    if (isSuccess) {
      navigate("/signup/custom");
    } else {
      console.log("서버 설정 실패");
    }
  };

  return (
    isSigned && (
      <S.Layout>
        <S.LogoContainr>
          <img src={Logo1} alt="Logo 1" />
          <img src={Logo2} alt="Logo 2" />
        </S.LogoContainr>
        <S.formWrapper
          method="post"
          isDisabled={firstCheck && secondCheck ? false : true}
        >
          <div className="containr">
            <div className="userPrivacy">닉네임 설정</div>
            <input
              className="Inputform"
              type="text"
              placeholder="이름을 입력하세요"
              value={nickname}
              onChange={handleNicknameChange}
            />
          </div>
          <div className="containr">
            <div className="userPrivacy">개인정보 이용약관</div>
            {texts.map((text, index) => (
              <PrivacyContainer
                key={index}
                index={index}
                text={text}
                setFirstCheck={setFirstCheck}
                setSecondCheck={setSecondCheck}
                onArrowClick={() => handleArrowClick(text)}
              />
            ))}
          </div>
          <button
            disabled={firstCheck && secondCheck ? false : true}
            onClick={handleSubmit}
            className="confirmBtn"
          >
            확인
          </button>
        </S.formWrapper>
      </S.Layout>
    )
  );
};
