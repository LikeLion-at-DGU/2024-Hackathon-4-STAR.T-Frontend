import React, { useState } from "react";
import * as S from "./styled";
import { Header } from "../../components/common/Header/Header";
import { MyStar } from "../../components/MyStar/MyStar";
import { Logout } from "../../components/Logout/Logout";
import Modal from "../../components/Modal/Modal";
import LOGO from "../../assets/images/MainLogoImg.svg";
import { useMyInfo } from "../../hooks/useMyInfo";
import WrapperContent from "../../components/PrivacyContent/PrivacyContent";
export const MyPage = () => {
  const { myinfo } = useMyInfo();
  const [isLogoutVisible, setisLogoutVisible] = useState(false);
  const [isSubscribeVisible, setisSubscribeVisible] = useState(false);
  const myData = myinfo && myinfo.data ? myinfo.data : null;
  const [isPrivacyVisible, setIsPrivacyVisible] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);

  const handleCloseModal = () => {
    setisLogoutVisible(false);
    setisSubscribeVisible(false);
    setIsPrivacyVisible(false);
  };

  const handleLogoutClick = () => {
    setisLogoutVisible(true);
  };

  const handleSubscribeClick = () => {
    setisSubscribeVisible(true);
  };

  const handlePrivacyClick = (content) => {
    setSelectedContent(content);
    setIsPrivacyVisible(true);
  };

  const handleBackBtnClick = () => {
    setIsPrivacyVisible(false);
  };

  return (
    <S.Layout>
      <Header $margin={"1rem 0 0 0"} $padding={"1rem 1rem 0 1rem"}>
        마이페이지
      </Header>
      <S.MypageWrapper>
        <S.Container>
          <S.StarImg src={LOGO} />
          <S.info>
            <div>{myData.nickname}</div>
          </S.info>
        </S.Container>
      </S.MypageWrapper>
      <S.MypageWrapper>
        <div className="MyStar">즐겨찾는 스타</div>
        {myData.celebs.length === 0 ? (
          <div className="emptytext">챌린지를 시작해보세요!</div>
        ) : (
          myData.celebs.map((item) => (
            <MyStar
              key={item.id}
              src={item.photo}
              star={item.name}
              career={item.profession}
              count={item.routines_added_count}
            />
          ))
        )}
      </S.MypageWrapper>
      <S.MypageWrapper>
        <div className="MyStar">개인정보</div>
        <button className="Privacy" onClick={""}>
          맞춤형 루틴 수정
        </button>
        <button className="Privacy" onClick={handleSubscribeClick}>
          구독관리
        </button>
        <button
          className="Privacy"
          onClick={() => handlePrivacyClick("이용약관")}
        >
          이용약관
        </button>
        <button
          className="Privacy"
          onClick={() => handlePrivacyClick("개인정보처리방침")}
        >
          개인정보처리방침
        </button>
        <button className="Privacy" onClick={handleLogoutClick}>
          로그아웃
        </button>
      </S.MypageWrapper>
      {isLogoutVisible && (
        <Modal onClose={handleCloseModal}>
          <Logout onClose={handleCloseModal} />
        </Modal>
      )}
      {isSubscribeVisible && (
        <Modal onClose={handleCloseModal}>
          <div>오픈예정입니다.</div>
        </Modal>
      )}
      {isPrivacyVisible && (
        <WrapperContent
          selectedText={selectedContent}
          onBackBtnClick={handleBackBtnClick}
          contentsNumber={selectedContent === "이용약관" ? "0" : "1"}
        />
      )}
    </S.Layout>
  );
};

export default MyPage;
