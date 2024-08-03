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
        files: [new File([blob], "screenshot.png", { type: "image/png" })],
        title: "Screenshot",
        text: "Check out this screenshot!",
      })
      .then(() => console.log("Share was successful."))
      .catch((error) => console.log("Sharing failed", error));
  } else {
    alert("Web Share API is not supported in your browser.");
  }
};
