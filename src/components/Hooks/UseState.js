import React ,{useState} from 'react'
// import "./style.css"
const UseState = () => {
    const initialData=10;
    const [MyNum,setMyNum] = useState(initialData);
  return (
    <>
    <div className="center_div">
        <p>{MyNum}</p>
        <div className="button2"onClick={()=>(MyNum <100  ? setMyNum(MyNum+1):setMyNum(100))}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCR
        </div>
        <div className="button2"onClick={()=>(MyNum > 0 ? setMyNum(MyNum-1):setMyNum(0))}>
        <span></span>
            <span></span>
            <span></span>
            <span></span>
            DESCR
        </div>
    </div>
    </>
  )
}

export default UseState;