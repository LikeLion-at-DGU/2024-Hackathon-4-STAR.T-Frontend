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
        title: "STAR.T",
        text: "likelion-start.site",
      })
      .then(() => console.log("Share was successful."))
      .catch((error) => console.log("Sharing failed", error));
  } else {
    alert("모바일 기기에서 실행해주세요!");
  }
};
