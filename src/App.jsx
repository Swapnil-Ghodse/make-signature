import Canvas from './components/Canvas'
import { useDispatch, useSelector } from 'react-redux'
import { changeStrokeSize, clearScreen, pickColor } from './redux/drawSplice';

function App() {

  const dispatch = useDispatch();
  const strokeColor = useSelector( (state)=> state.draw.strokeColor );
  const strokeSize = useSelector( state => state.draw.strokeSize);

  const clearScreenFunction = ()=>{
      const canvas = document.querySelector("#signature-canvas");
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, 500, 500);
  }
  



  return (
    <>
      <div >
        <button className=" btn btn-outline btn-error" onClick={()=>clearScreenFunction() }>Clear</button>
        <input type='color' id='drawColorPicker' onChange={(event) =>{dispatch(pickColor(event.target.value))}} value={strokeColor} />
        <input type='range' id='strokeSize' value={strokeSize} min={1} max={50} onChange={(event) =>{dispatch(changeStrokeSize(event.target.value))}} />  
      </div>
      <Canvas />
      </>
  )
}

export default App
