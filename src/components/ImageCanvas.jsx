import React, { useEffect, useRef } from "react";

const ImageCanvas = ({ src }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      const ctx = canvasRef.current.getContext("2d");
      ctx.drawImage(img, 0, 0, canvasRef.current.width, canvasRef.current.height);
    };
  }, [src]);

  return <canvas ref={canvasRef} width={200} height={200} />;
};

export default ImageCanvas;
