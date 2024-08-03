export const captureScreenshot = async (canvas) => {
  const shareButton = document.getElementById("share-button");
  if (shareButton) shareButton.style.display = "none";
  if (shareButton) shareButton.style.display = "block";

  const dataUrl = canvas.toDataURL("image/png");
  const blob = await fetch(dataUrl).then((res) => res.blob());

  // Web Share API 사용
  if (navigator.share) {
    navigator
      .share({
        files: [new File([blob], "start.png", { type: "image/png" })],
        title: "루틴 달성",
        text: "스타들의 빛나는 루틴, STAR.T로 시작하세요!",
      })
      .then(() => console.log("Share was successful."))
      .catch((error) => console.log("Sharing failed", error));
  } else {
    alert("모바일 기기에서 실행해주세요!");
  }
};
