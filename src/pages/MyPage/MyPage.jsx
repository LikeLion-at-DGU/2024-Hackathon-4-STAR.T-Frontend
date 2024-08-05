import React, { useState } from "react";
import * as S from "./styled";
import { Header } from "../../components/common/Header/Header";
import { MyStar } from "../../components/MyStar/MyStar";
import { Logout } from "../../components/Logout/Logout";
import Modal from "../../components/Modal/Modal";
import LOGO from "../../assets/images/MainLogoImg.svg";
import { useMyInfo } from "../../hooks/useMyInfo";
import WrapperContent from "../../components/PrivacyContent/PrivacyContent";
import ChangeRoutine from "../../components/RoutineChange/RoutineChange";
import { AgreePage } from "@/pages/AgreePage/AgreePage";
import { useNavigate } from "react-router-dom";
const MyPage = () => {
  const { myinfo } = useMyInfo();
  const [isLogoutVisible, setIsLogoutVisible] = useState(false);
  const [isSubscribeVisible, setIsSubscribeVisible] = useState(false);
  const [isPrivacyVisible, setIsPrivacyVisible] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);
  const [routineVisible, setRoutineVisible] = useState(false);
  const navigate = useNavigate();
  const myData = myinfo?.data || null;

  if (!myData) {
    return <p>데이터를 불러오는 중입니다...</p>; // myinfo.data가 null인 경우 처리
  }
  const handleCategoriesUpdate = () => {
    setRoutineVisible(false);
  };
  const handleCloseModal = () => {
    setIsLogoutVisible(false);
    setIsSubscribeVisible(false);
    setIsPrivacyVisible(false);
  };

  const handleLogoutClick = () => setIsLogoutVisible(true);
  const handleSubscribeClick = () => setIsSubscribeVisible(true);
  const handlePrivacyClick = (content) => {
    setSelectedContent(content);
    setIsPrivacyVisible(true);
  };

  const handleRoutineChangeClick = () => setRoutineVisible(true);

  const handleBackBtnClick = () => setIsPrivacyVisible(false);
  const favoriteStars = myData.celebs.filter(
    (item) => item.routines_added_count > 0
  );

  const moveOnstarP = (id) => {
    navigate(`/star/${id}`);
  };
  return (
    <>
      {isPrivacyVisible ? (
        <WrapperContent
          selectedText={selectedContent}
          onBackBtnClick={handleBackBtnClick}
          contentsNumber={selectedContent === "이용약관" ? "0" : "1"}
        />
      ) : routineVisible ? (
        <ChangeRoutine onCategoriesUpdate={handleCategoriesUpdate} />
      ) : (
        <>
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
              {favoriteStars.length === 0 ? (
                <div className="emptytext">챌린지를 시작해보세요!</div>
              ) : (
                favoriteStars.map((item) => (
                  <MyStar
                    key={item.id}
                    src={item.photo}
                    star={item.name}
                    career={item.profession}
                    count={item.routines_added_count}
                    onClick={() => moveOnstarP(item.id)}
                  />
                ))
              )}
            </S.MypageWrapper>
            <S.MypageWrapper>
              <div className="MyStar">개인정보</div>
              <button className="Privacy" onClick={handleRoutineChangeClick}>
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
                <S.subscribeBox>서비스 준비중입니다.</S.subscribeBox>
              </Modal>
            )}
          </S.Layout>
        </>
      )}
    </>
  );
};

export default MyPage;
