import React ,{useState,useReducer} from 'react'
const reducer = (state,action) =>{
    if(action.type==="INCR"){
        state=state+1;
    }
    if(state>0 && action.type==="DESCR"){
        state=state-1;
    }
    return state;
}
const UseReducer = () => {
    const initialData=10;
    // const [MyNum,setMyNum] = useState(initialData);
    const[state,dispatch]=useReducer(reducer,initialData)
  return (
    <div className="center_div">
        <p>{state}</p>
        <div className="button2"onClick={()=>dispatch({type:"INCR"})}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCR
        </div>
        <div className="button2"onClick={()=>dispatch({type:"DESCR"})}>
        <span></span>
            <span></span>
            <span></span>
            <span></span>
            DESCR
        </div>
    </div>
  )
}

export default UseReducer;