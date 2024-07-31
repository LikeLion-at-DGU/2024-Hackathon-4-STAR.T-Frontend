import React, { useState } from "react";
import * as S from "./styled";
import { Header } from "../../components/common/Header/Header";
import { MyStar } from "../../components/MyStar/MyStar";
import { DUMMY_DATA } from "../../constants/StarPage/dummy";
import { useNavigate } from "react-router-dom";
import { Logout } from "../../components/Logout/Logout";
import Modal from "../../components/Modal/Modal";

export const MyPage = () => {
  const navigate = useNavigate();
  const [isLogoutVisible, setisLogoutVisible] = useState(false);

  const handleCloseModal = () => {
    setisLogoutVisible(false);
  };

  const handleLogoutClick = () => {
    setisLogoutVisible(true);
  };

  return (
    <S.Layout>
      <Header $margin={"1rem 0 0 0"} $padding={"1rem 1rem 0 1rem"}>
        마이페이지
      </Header>
      <S.MypageWrapper>
        <S.Container>
          <S.StarImg src={""} />
          <S.info>
            <div>닉네임</div>
            {/* 수정필요 */}
          </S.info>
        </S.Container>
      </S.MypageWrapper>
      <S.MypageWrapper>
        <div className="MyStar">나의 최애</div>
        {DUMMY_DATA.length === 0 ? (
          <div className="emptytext">챌린지를 시작해보세요!</div>
        ) : (
          DUMMY_DATA.map((data) => (
            <MyStar
              key={data.id}
              src={data.src}
              star={data.star}
              career={data.career}
            />
          ))
        )}
      </S.MypageWrapper>
      <S.MypageWrapper>
        <div className="MyStar">개인정보</div>
        <button className="Privacy" onClick={() => navigate("/")}>
          맞춤형 루틴 수정
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
    </S.Layout>
  );
};

export default MyPage;
