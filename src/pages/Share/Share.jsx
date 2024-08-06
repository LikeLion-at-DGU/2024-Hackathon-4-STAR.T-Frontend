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

    const checkAllImagesLoaded = () => {
      imagesLoaded += 1;
      if (imagesLoaded === images.length) {
        setIsImageReady(true);
      }
    };

    if (images.length === 0) {
      setIsImageReady(true);
    } else {
      images.forEach((img) => {
        img.crossOrigin = "anonymous"; // CORS 설정
        if (img.complete) {
          checkAllImagesLoaded();
        } else {
          img.addEventListener("load", checkAllImagesLoaded);
          img.addEventListener("error", checkAllImagesLoaded); // 이미지 로드 실패 시에도 체크
        }
      });
    }

    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", checkAllImagesLoaded);
        img.removeEventListener("error", checkAllImagesLoaded);
      });
    };
  }, [starP]);

  const handleCapture = async () => {
    setIsButtonVisible(false);
    setTimeout(async () => {
      const canvas = await html2canvas(captureRef.current, { useCORS: true });
      const ctx = canvas.getContext("2d");
      ctx.filter = "blur(10px)";
      await captureScreenshot(canvas);
      setIsButtonVisible(true);
    }, 100);
  };

  const starData = starP && starP.data ? starP.data : null;
  if (!starData) {
    return <p>데이터를 불러오는 중입니다...</p>;
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
