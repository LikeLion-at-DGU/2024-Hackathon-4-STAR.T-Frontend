import React from "react";
import { AGREE_TEXT } from "../../constants/Text/title";
import * as S from "./styled";
const WrapperContent = ({ selectedText, onBackBtnClick, contentsNumber }) => {
  console.log("내용 불러오기 성공");
  return (
    <S.Wrapper>
      {selectedText && (
        <>
          <div className="title">{selectedText}</div>

          {AGREE_TEXT[contentsNumber].map((text, key) => (
            <div key={key} className="content">
              <p>{text}</p>
            </div>
          ))}
        </>
      )}
      <button
        style={{
          marginBottom: "2rem",
        }}
        className="backBtn"
        onClick={onBackBtnClick}
      >
        뒤로가기
      </button>
    </S.Wrapper>
  );
};

export default WrapperContent;
