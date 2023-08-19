/**
 * 组件在加载时运行
 * @params fn
 */

import { useEffect } from "react"

const useMount = (fn:()=>void)=>{
    useEffect(()=>{
        fn?.();
    },[])
};

export default useMount;
