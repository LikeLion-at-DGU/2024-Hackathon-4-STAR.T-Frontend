import React from "react";
import * as S from "./styled";
import { Header } from "../../components/common/Header/Header";
import { MyStar } from "../../components/MyStar/MyStar";
import { DUMMY_DATA } from "../../constants/StarPage/dummy";
import { useNavigate } from "react-router-dom";
export const MyPage = () => {
  const navigate = useNavigate();

  return (
    <S.Layout>
      <Header>마이페이지</Header>
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
        <button className="Privacy">로그아웃</button>
      </S.MypageWrapper>
    </S.Layout>
  );
};

export default MyPage;
