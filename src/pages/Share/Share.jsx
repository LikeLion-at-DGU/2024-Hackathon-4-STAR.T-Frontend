import React, { useRef, useState, useEffect } from "react";
import html2canvas from "html2canvas";
import { captureScreenshot } from "@/utils/share";
import * as S from "./styled";
import { useMoveonStarP } from "@/hooks/useStar";
import shareIcon from "@/assets/shareIcon.svg";
import ClearStarPIcon1 from "@/assets/starclearPicon1.svg";
import ClearStarPIcon2 from "@/assets/starclearPicon2.svg";

const SharePage = ({ onBack }) => {
  const { starP } = useMoveonStarP();
  const captureRef = useRef();
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [isImageReady, setIsImageReady] = useState(false);

  useEffect(() => {
    const images = document.querySelectorAll("img");
    let imagesLoaded = 0;

    if (images.length === 0) {
      // 이미지를 로드할 필요가 없으므로 바로 true로 설정
      setIsImageReady(true);
      return;
    }

    images.forEach((img) => {
      if (img.complete) {
        imagesLoaded += 1;
        if (imagesLoaded === images.length) {
          setIsImageReady(true);
        }
      } else {
        img.addEventListener("load", () => {
          imagesLoaded += 1;
          if (imagesLoaded === images.length) {
            setIsImageReady(true);
          }
        });
      }
    });
  }, [starP]);

  const handleCapture = async () => {
    setIsButtonVisible(false);
    setTimeout(async () => {
      const canvas = await html2canvas(captureRef.current);
      await captureScreenshot(canvas);

      setIsButtonVisible(true);
    }, 100);
  };

  const starData = starP && starP.data ? starP.data : null;
  if (!starData) {
    return <p>데이터를 불러오는 중입니다...</p>; // theme이 null인 경우 처리
  }

  return (
    <div>
      <div ref={captureRef}>
        {/* 캡처할 내용 */}
        <S.Wrapper>
          <S.Header>
            <S.BannerImage
              src={starData.photo}
              alt={starData.name}
              onLoad={() => setIsImageReady(true)}
            />
            <S.BannerTitle>
              <div>{starData.name}</div>
              <div className="profession">{starData.profession}</div>
            </S.BannerTitle>
          </S.Header>
          <div className="Containr">
            <S.ClearCantainr>
              <S.ClearMain>
                <div className="text">축하합니다!</div>
                <div className="imgContainr">
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
            {isImageReady && isButtonVisible && (
              <div id="share-button">
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
            )}
          </div>
        </S.Wrapper>
      </div>
    </div>
  );
};

export default SharePage;
