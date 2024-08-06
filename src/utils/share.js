export const captureScreenshot = async (canvas) => {
  const shareButton = document.getElementById("share-button");

  // Capture the canvas image
  const dataUrl = canvas.toDataURL("image/png");
  const blob = await fetch(dataUrl).then((res) => res.blob());

  // Hide the share button during capture
  if (shareButton) shareButton.style.display = "none";

  // Use the Web Share API if available
  if (navigator.share) {
    navigator
      .share({
        files: [new File([blob], "start.png", { type: "image/png" })],
        title: "STAR.T",
        text: "likelion-start.site",
      })
      .then(() => console.log("Share was successful."))
      .catch((error) => console.log("Sharing failed", error))
      .finally(() => {
        // Show the share button again after sharing
        if (shareButton) shareButton.style.display = "block";
      });
  } else {
    // Show the share button again if Web Share API is not supported
    if (shareButton) shareButton.style.display = "block";
    alert("모바일 기기에서 실행해주세요!");
  }
};
