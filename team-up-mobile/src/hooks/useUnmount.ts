/**
 * 组件在卸载时运行
 * @params fn
 */

 import { useEffect } from "react"
import useLatest from "./useLastest";

 const useUnmount = (fn:()=>void)=>{
    const fnRef = useLatest(fn)
     useEffect(()=>{
        return fnRef.current();
     },[])
 };
 
 export default useUnmount;
 