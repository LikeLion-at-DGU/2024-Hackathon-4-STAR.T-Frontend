import React, { useRef } from "react";
import html2canvas from "html2canvas";
import { captureScreenshot } from "@/utils/share";

const SharePage = () => {
  const captureRef = useRef();
  const handleCapture = async () => {
    const canvas = await html2canvas(captureRef.current);
    await captureScreenshot(canvas);
  };

  return (
    <div>
      <div ref={captureRef}>
        {/* 캡처할 내용 */}
        <h1>Hello, World!</h1>
        <p>This is a page that will be captured.</p>
        <div id="share-button">
          {/* 공유 버튼 제외할 태그 */}
          <button onClick={handleCapture}>Share this page</button>
        </div>
      </div>
    </div>
  );
};

export default SharePage;
