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
      const canvas = await html2canvas(captureRef.current, {
        useCORS: true,
        onclone: (clonedDoc) => {
          const bannerImage = clonedDoc.querySelector("img[data-mask='true']");
          if (bannerImage) {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            const img = new Image();
            img.crossOrigin = "anonymous";
            img.src = bannerImage.src;
            img.onload = () => {
              canvas.width = bannerImage.width;
              canvas.height = bannerImage.height;
              ctx.drawImage(img, 0, 0);
              // Apply mask
              ctx.fillStyle = "rgba(0, 0, 0, 0)";
              const gradient = ctx.createLinearGradient(
                0,
                0,
                0,
                bannerImage.height
              );
              gradient.addColorStop(0.6, "rgba(0, 0, 0, 1)");
              gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
              ctx.fillStyle = gradient;
              ctx.fillRect(0, 0, bannerImage.width, bannerImage.height);
              bannerImage.src = canvas.toDataURL();
            };
          }
        },
      });
      await captureScreenshot(canvas);
      setIsButtonVisible(true);
    }, 100);
  };

  const starData = starP && starP.data ? starP.data : null;
  if (!starData) {
    return <p>데이터를 불러오는 중입니다...</p>;
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
            <S.BannerImage
              src={starData.photo}
              alt={starData.name}
              data-mask="true"
              style={{
                display: "block",
                width: "100%",
                height: "282px",
                objectFit: "cover",
                maskImage:
                  "linear-gradient(rgb(0, 0, 0) 60%, rgba(0, 0, 0, 0) 100%)",
                position: "relative",
              }}
            />
            <S.BannerTitle>
              <div>{starData.name}</div>
              <div className="profession">{starData.profession}</div>
            </S.BannerTitle>
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
            {isImageReady && isButtonVisible && (
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
            )}
          </div>
        </S.Wrapper>
      </div>
    </div>
  );
};

export default SharePage;
