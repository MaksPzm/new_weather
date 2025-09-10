import React, { memo, useEffect, useState } from "react";
import styles from "./weather.module.scss"
import { useLocation, useFethchWeatherFiveDays } from "../../Api/api";

interface ComponentProps {
    nameCity: string
}

// interface location {
//    lat: number,
//    lon: number,
//    name: string
// }
type lo = Array<{name: string; lat: number; lon: number;}>
type loc = lo[0];
type coord = {name: string, lat: number, lon: number};

export default function Weather({nameCity}: ComponentProps): React.JSX.Element {
    const [coord, setCoord] = useState<coord>({name: "", lat: 0, lon: 0});
    console.log("nC", nameCity);
    
    const locations: any = useLocation(nameCity);
    
    useEffect(() => {
       const location: loc = locations[0]; 
       setCoord(location)
    }, [locations])
    // const { lat, lon } = location;
    // const { lat, lon, name } = location 
    
    console.log("loc", coord);
    // console.log("asda", coord);
    // console.log("sdf", lat, lon);
    // const weatherRequest = useFethchWeatherFiveDays(coord.lat, coord.lon);
    // console.log('weatherRequest: ', weatherRequest);
    const [resultAPI, setResultAPI] = useState({})




    // !!
    // console.log('resultAPI: ', resultAPI);
    // useEffect(() => {
    //     if (coord.lat === undefined && coord.lon) return;
    //     fetch(`https://www.meteosource.com/api/v1/free/point?lat=${coord.lat}&lon=${coord.lon}&sections=current%2Cdaily&language=en&units=metric&key=0yhpulmq0puhpdn841y7aklgjd638ep6b7ak9exp`)
    //         .then((response) => response.json())
    //         .then((result) => {
    //             setResultAPI(result)
    //         })
    //         .catch(err => {
    //             console.log("Ошибка запроса");
    //         })
    // }, [coord.lat, coord.lon])
    
    
    
    return (
        <div>

        </div>
    )
}

// const WeatherTodays = memo(WeatherToday);
// export default WeatherTodays;