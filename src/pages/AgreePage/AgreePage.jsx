import React from "react";
import { AGREE_TEXT } from "@/constants/Text/title";
import * as S from "./style";
import { useNavigate, useParams } from "react-router-dom";
export const AgreePage = () => {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);
  return (
    <S.Wrapper>
      <>
        <div className="title">
          {params.num === "0" ? "이용약관" : "개인정보 처리방침"}
        </div>

        {AGREE_TEXT[params.num].map((text, key) => (
          <div key={key} className="content">
            <p>{text}</p>
          </div>
        ))}
      </>
      <button className="backBtn" onClick={() => navigate(-1)}>
        뒤로가기
      </button>
    </S.Wrapper>
  );
};
