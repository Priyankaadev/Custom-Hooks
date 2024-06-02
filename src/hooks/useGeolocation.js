import { useEffect, useState } from "react";

function useGeolocation(){

    const [pos, setPos] = useState({
        latitude:'',
        longitude:''
    })

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((geo)=>{
           setPos({
            latitude : geo.coords.latitude,
            longitude: geo.coords.longitude
           }) 
        })
    },[])

    return pos;
    

}
export default useGeolocation;