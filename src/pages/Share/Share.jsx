import React, { useRef, useState, useEffect } from "react";
import html2canvas from "html2canvas";
import { captureScreenshot } from "@/utils/share";
import * as S from "./styled";
import { useMoveonStarP } from "@/hooks/useStar";
import shareIcon from "@/assets/shareIcon.svg";
import ClearStarPIcon1 from "@/assets/starclearPicon1.svg";
import ClearStarPIcon2 from "@/assets/starclearPicon2.svg";
import blur from "@/assets/blur.svg";
import { isLoading } from "@/stores/loading";
import { Loading } from "../Loading/Loading";
import { useRecoilState } from "recoil";

const SharePage = ({ onBack }) => {
  const { starP } = useMoveonStarP();
  const captureRef = useRef();
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [isImageReady, setIsImageReady] = useState(false);
  const [loading, setLoading] = useRecoilState(isLoading);

  const handleCapture = async () => {
    setIsButtonVisible(false);
    setLoading(true); // Set loading before capturing
    setTimeout(async () => {
      const canvas = await html2canvas(captureRef.current, { useCORS: true });
      await captureScreenshot(canvas);
      setIsButtonVisible(true);
      setLoading(false); // Set loading after capturing
    }, 100);
  };

  const starData = starP && starP.data ? starP.data : null;
  if (!starData || loading) {
    return <Loading />;
  }

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <div
        style={{
          width: "100%",
          minHeight: "100%",
        }}
        ref={captureRef}
      >
        {/* 캡처할 내용 */}
        <S.Wrapper>
          <S.Header>
            <S.BannerImage src={starData.photo} alt={starData.name} />
            <S.BannerTitle>
              <div>{starData.name}</div>
              <div className="profession">{starData.profession}</div>
            </S.BannerTitle>
            <S.BlurImage className="blur" src={blur} />
          </S.Header>
          <div className="Container">
            <S.ClearCantainr>
              <S.ClearMain>
                <div className="text">축하합니다!</div>
                <div className="imgContainer">
                  <img
                    src={ClearStarPIcon1}
                    onLoad={() => setIsImageReady(true)}
                  />
                  <img
                    className="icon2"
                    src={ClearStarPIcon2}
                    onLoad={() => setIsImageReady(true)}
                  />
                  <div className="textOverlay">
                    {starData.routines_added_count}회
                  </div>
                </div>
                <div className="text">루틴 완료 달성!</div>
              </S.ClearMain>
            </S.ClearCantainr>
            {
              <div
                id="share-button"
                style={{
                  visibility:
                    isImageReady && isButtonVisible ? "visible" : "hidden",
                  width: "100%",
                  height: "100%",
                }}
              >
                <S.shareContainr>
                  <S.shareBtn onClick={handleCapture}>
                    <div className="ImgSave">
                      이미지 저장하고 공유하기
                      <img src={shareIcon} />
                    </div>
                  </S.shareBtn>
                  <button className="backBtn" onClick={onBack}>
                    뒤로가기
                  </button>
                </S.shareContainr>
              </div>
            }
          </div>
        </S.Wrapper>
      </div>
    </div>
  );
};

export default SharePage;
