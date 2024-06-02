import { useEffect, useRef } from "react";

function usePrevious(state){
    const previousRef = useRef();
    //refs don't change the value after rerender

    useEffect(()=>{
        previousRef.current = state
    },[state])
   
    return previousRef.current
}

export default usePrevious;