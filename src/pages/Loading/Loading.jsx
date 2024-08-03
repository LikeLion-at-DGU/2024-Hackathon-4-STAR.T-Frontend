import * as S from "./style";
import React, { useState } from "react";
import Logo1 from "../../assets/images/loading_logo(1).svg";
import Logo2 from "../../assets/images/loading_logo(2).svg";
import PrivacyContainer from "../../components/PrivacyContainer/PrivacyContainer";
import { postSetInfo } from "../../apis/signup";
import { useNavigate } from "react-router-dom";
import WrapperContent from "../../components/PrivacyContent/PrivacyContent";
import { useRecoilState } from "recoil";
import { pageNumberState } from "../../stores/Privacy";
export const Loading = () => {
  const texts = ["이용약관", "개인정보 처리방침"];
  const [pageNumber, setPageNumber] = useRecoilState(pageNumberState);
  const [nickname, setNickname] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [selectedText, setSelectedText] = useState(null);
  const navigate = useNavigate();

  const handleArrowClick = (text) => {
    setIsFormVisible(false);
    setSelectedText(text);
    if (text === "이용약관") {
      setPageNumber(0);
    } else {
      setPageNumber(1);
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
      navigate("/");
      console.log("완료");
    } else {
      console.log("서버 설정 실패");
    }
  };

  return (
    <S.Layout>
      <S.LogoContainr>
        <img src={Logo1} alt="Logo 1" />
        <img src={Logo2} alt="Logo 2" />
      </S.LogoContainr>
      {isFormVisible ? (
        <S.formWrapper method="post">
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
                text={text}
                onArrowClick={handleArrowClick}
              />
            ))}
          </div>
          <button onClick={handleSubmit} className="confirmBtn">
            확인
          </button>
        </S.formWrapper>
      ) : (
        <WrapperContent
          selectedText={selectedText}
          onBackBtnClick={handleBackBtnClick}
          contentsNumber={pageNumber}
        />
      )}
    </S.Layout>
  );
};
