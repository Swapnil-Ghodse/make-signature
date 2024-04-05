import Canvas from "./components/Canvas";
import { useDispatch, useSelector } from "react-redux";
import { changeStrokeSize, clearScreen, pickColor } from "./redux/drawSplice";

function App() {
  const dispatch = useDispatch();
  const strokeColor = useSelector((state) => state.draw.strokeColor);
  const strokeSize = useSelector((state) => state.draw.strokeSize);

  const clearScreenFunction = () => {
    const canvas = document.querySelector("#signature-canvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, window.screen.width, window.screen.height);
  };

  const downloadImage = () => {
      let link = document.createElement('a');
      link.download = 'signature.png';
      link.href = document.getElementById('signature-canvas').toDataURL()
      link.click();
  }

  return (
    <div className=" container mx-auto pt-1 flex flex-col">
      <div className="py-7">
        <div className="flex justify-around items-center pb-8">
          <button
            className=" btn btn-error"
            onClick={() => clearScreenFunction()}
          >
            Clear
          </button>
          <input
            type="color"
            id="drawColorPicker"
            onChange={(event) => {
              dispatch(pickColor(event.target.value));
            }}
            value={strokeColor}
            className=" w-32 h-12 rounded-md"
          />

          <span className="flex items-center ">
            <input
              type="range"
              id="strokeSize"
              value={strokeSize}
              min={1}
              max={50}
              className=""
              onChange={(event) => {
                dispatch(changeStrokeSize(event.target.value));
              }}
            />
            <p className="m-4 w-2">{strokeSize}</p>
          </span>
        </div>
      </div>
      <div >
        <Canvas />
      </div>
      <div className="m-auto py-4">
        <button type="button" className="btn btn-success base-100" onClick={()=>downloadImage()}>Download</button>
      </div>
    </div>
  );
}

export default App;
