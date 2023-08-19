import { useRef } from "react"

 const useLatest = <T>(value:T)=>{
    const fnRef = useRef(value);
    fnRef.current = value;
    return fnRef;
 };
 
 export default useLatest;
 