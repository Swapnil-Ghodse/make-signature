import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function Canvas() {
  const strokeColor = useSelector((state) => state.draw.strokeColor);
  const strokeSize = useSelector((state) => state.draw.strokeSize);

  useEffect(() => {
    const canvas = document.querySelector("#signature-canvas");

    const ctx = canvas.getContext("2d");

    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = strokeSize;

    ctx.lineJoin = "round";
    ctx.lineCap = "round";

    let isDrawing = false;

    let lastX = 0;
    let lastY = 0;

    const draw = (event) => {
      if (!isDrawing) return;

      ctx.beginPath();

      ctx.moveTo(lastX, lastY);
      ctx.lineTo(event.offsetX, event.offsetY);
      ctx.stroke();

      [lastX, lastY] = [event.offsetX, event.offsetY];
    };

    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mousedown", (event) => {
      isDrawing = true;
      [lastX, lastY] = [event.offsetX, event.offsetY];
    });

    canvas.addEventListener("mouseup", () => (isDrawing = false));
    canvas.addEventListener("mouseout", () => (isDrawing = false));
  }, [strokeColor, strokeSize]);

  return (
    <canvas
      id="signature-canvas"
      width={1200}
      height={700}
      className=" border-solid border-2 border-black px-0 mx-auto block w-[1200px]"
    ></canvas>
  );
}

export default Canvas;
