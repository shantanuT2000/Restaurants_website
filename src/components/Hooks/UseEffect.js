import React ,{useState,useEffect} from 'react'

const UseEffect = () => {
    const [MyNum,setmyNum] = useState(0);
    useEffect(()=>{
        document.title=`Chats(${MyNum})`;
    })
  return (
    
    <>
     <div className="center_div">
        <p>{MyNum}</p>
        <div className="button2"onClick={()=> setmyNum(MyNum +1)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCR
        </div>
        <div className="button2"onClick={()=> setmyNum(MyNum-1)}>
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

export default UseEffect;