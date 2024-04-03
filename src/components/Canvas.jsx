import React, { useEffect } from "react";

function Canvas() {
  useEffect(() => {
    const canvas = document.querySelector("#signature-canvas");

    const ctx = canvas.getContext("2d");

    ctx.fillRect(25, 25, 100, 100);
    ctx.strokeStyle = '#000000';

    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    
    
    let isDrawing = false;

    let lastX = 0;
    let lastY = 0;

    const draw = (event) =>{
        if(!isDrawing) return;

        ctx.beginPath();

        ctx.moveTo(lastX, lastY);
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();

        
        [lastX, lastY] = [event.offsetX, event.offsetY];

    }

    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mousedown', (event)=>{
        isDrawing = true;
        [lastX, lastY] = [event.offsetX, event.offsetY];
    });
    
canvas.addEventListener('mouseup', ()=>isDrawing=false);
canvas.addEventListener('mouseout', ()=>isDrawing=false);


  }, []);

  return (
    <div>
      <canvas
        id="signature-canvas"
        width="500"
        height="500"
        className=" border-solid border-2 border-black"
      ></canvas>
    </div>
  );
}

export default Canvas;
