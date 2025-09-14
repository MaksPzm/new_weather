import React, { memo, useEffect, useState } from "react";
import styles from "./weather.module.scss";
import WeatherToDo from "../weatherToDo/WeatherToDo";

interface ComponentProps {
    nameCity: string
}
interface geocoding {
    lat: number,
    lon: number
}

interface api {
    temperature: number,
    temperature_max: number,
    temperature_min: number,
    icon: number,
     wind: {
        angle: number,
        dir: string,
        speed: number,
    }; 
}

export default function Weather({nameCity}: ComponentProps): React.JSX.Element {
    const [geocoding, setGeocoding] = useState<geocoding>({lat: 0, lon: 0});
    const [resultToDo, setResultToDo] = useState<api>({temperature: 0, temperature_max: 0, temperature_min: 0, icon: 0, wind: {angle: 0, dir: "", speed: 0}});
    const {lat, lon} = geocoding as geocoding;
    useEffect(() => {
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${nameCity},643&limit=1&appid=7a7246067a4dacd8861ed493fa0284f1`)
            .then((response) => response.json())
            .then((data) => {
            setGeocoding(data[0]);
            })
            .catch(err => {
                console.log('Ошибка запроса');
            })
    }, [nameCity])
    useEffect(() => {
        if (lat === null && lon === null) return;
        fetch(`https://www.meteosource.com/api/v1/free/point?lat=${lat}&lon=${lon}&sections=current%2Cdaily&language=en&units=metric&key=0yhpulmq0puhpdn841y7aklgjd638ep6b7ak9exp`)
            .then((response) => response.json())
            .then((result) => {
                console.log('result: ', result.daily.data[0].all_day);
                setResultToDo(result.daily.data[0].all_day)
            })
            .catch(err => {
                console.log("Ошибка запроса");
            })
    }, [lat, lon])
    return (
        <div>
            <WeatherToDo resultToDo={resultToDo} nameCity={nameCity}/>
        </div>
    )
}
