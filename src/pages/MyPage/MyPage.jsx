import React, { useState } from "react";
import * as S from "./styled";
import { Header } from "../../components/common/Header/Header";
import { MyStar } from "../../components/MyStar/MyStar";
import { Logout } from "../../components/Logout/Logout";
import Modal from "../../components/Modal/Modal";
import LOGO from "../../assets/images/MainLogoImg.svg";
import { useMyInfo } from "../../hooks/useMyInfo";
import ChangeRoutine from "../../components/RoutineChange/RoutineChange";
import { useNavigate } from "react-router-dom";
import { isLoading } from "@/stores/loading";
import { Loading } from "../Loading/Loading";

const MyPage = () => {
  const loadingStatus = useRecoilValue(isLoading);
  const { myinfo } = useMyInfo();
  const [isLogoutVisible, setIsLogoutVisible] = useState(false);
  const [isSubscribeVisible, setIsSubscribeVisible] = useState(false);

  const [routineVisible, setRoutineVisible] = useState(false);
  const navigate = useNavigate();
  const myData = myinfo?.data || null;

  if (loadingStatus || myData === null) {
    return <Loading />;
  }
  const handleCategoriesUpdate = () => {
    setRoutineVisible(false);
  };
  const handleCloseModal = () => {
    setIsLogoutVisible(false);
    setIsSubscribeVisible(false);
  };

  const handleLogoutClick = () => setIsLogoutVisible(true);
  const handleSubscribeClick = () => setIsSubscribeVisible(true);

  const handlePrivacyClick = (text) => {
    if (text === "이용약관") {
      navigate("/agree/0");
    } else {
      navigate("/agree/1");
    }
  };
  const handleRoutineChangeClick = () => setRoutineVisible(true);

  const favoriteStars = myData.celebs.filter(
    (item) => item.routines_added_count > 0
  );

  const moveOnstarP = (id) => {
    console.log("id:", id);
    navigate(`/star/${id}`);
  };
  return (
    <>
      {routineVisible ? (
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
