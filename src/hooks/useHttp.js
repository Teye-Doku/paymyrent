import { useState,useCallback,useRef,useEffect } from 'react';

const useHttp = () => {
    const [ loading,setLoading ] = useState(false);
   const [ error,setError ] = useState(null);

   const activeHttpRequests = useRef([])


 const sendRequest = useCallback( async (url,method='GET',body=null,headers={})=>{
          setLoading(true);
          const httpAbortCtrl = new AbortController();
          activeHttpRequests.current.push(httpAbortCtrl);

          try {
             const response = await fetch(url,{
                 method:method,
                 body:body,
                 headers:headers
             });
             const responseData = response.json();
             activeHttpRequests.current =
              activeHttpRequests.current.filter(reqCtrl => reqCtrl !== httpAbortCtrl);
             if(!response.ok) {
                throw new Error('oops, something went wrong try to login.')
             }
             setLoading(false);
             setError(null);
             return responseData;
          }catch(e) {
              setLoading(false);
              setError(e.message);
          }
 },[]);

 useEffect(() => {
     
     return () => {
         activeHttpRequests.current.forEach(reqCtrl => reqCtrl.abort())
     }
 }, [])

 const clearError = () => setError(null);

  return  { loading,error,sendRequest,clearError };
}

export default useHttp;