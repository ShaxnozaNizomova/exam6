import { useEffect, useState } from "react";
import axios from '../api'
export function useFetch(api, ...rest){
    const [data, setData] = useState(null)
    useEffect(()=>{
        axios
          .get(api)
          .then(res => setData(res))
          .catch(res => console.log(res))
      },[...rest])
      return {data}
}