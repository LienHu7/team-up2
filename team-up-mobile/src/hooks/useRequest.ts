import { useCallback, useState } from "react";
import useMount from "./useMount";

/**
 * 组件初始化，发送请求，获取数据
 * 2.手动触发请求
 * @param service
 * @param params
 * @returns
 */

interface IOptions{
    params: Record<string,string>;
    manual: boolean;
    onSuccess?: (res: unknown)=>void;
    onError?: (err:unknown)=>void;
}
const useRequest = (
  service: (params: Record<string, string>) => Promise<unknown>,
  options: IOptions

) => {
  const [data, setdata] = useState<unknown>();
  const [loading, setLoading] = useState<boolean>(false);

  const init = useCallback( (curparams: Record<string,string>) => {
    setLoading(true);
    service(curparams)
      .then((res) => {
        setdata(res);
        setLoading(false);
        options.onSuccess && options.onSuccess(res)
      })
      .catch((error) => {
        setLoading(false);
        options.onError && options.onError(error);
      });
  },[service]);

  useMount(() => {
    if(!options.manual){
        init(options.params);
    }

  });

  const run = (runParams: Record<string, string>) => {
    init(runParams);
  };

  return {loading, data, run};
};

export default useRequest;
