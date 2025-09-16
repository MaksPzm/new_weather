import React, { createContext, memo, useEffect, useState } from "react";
import styles from "./weather.module.scss";
import WeatherToDay from "../WeatherToDay/WeatherToDay";
import CurrentWeather from "../currentWeather/CurrentWeather";

interface ComponentProps {
    nameCity: string
};
interface geocoding {
    lat: number,
    lon: number
};

type data = {
    data: [{
        all_day: {
             temperature: number,
            temperature_max: number,
            temperature_min: number,
            icon: number,
            wind: {
                angle: number,
                dir: string,
                speed: number
            }
        }
       
    }]
}


const defaultValueFiveDays: data = { 
    data: [{
        all_day: {
            temperature: 0, 
            temperature_max: 0, 
            temperature_min: 0, 
            icon: 0,
            wind: {angle: 0, dir: "", speed: 0} 
        }
        
    }]
};

export const WeatherFiveDaysContent = createContext<data>(defaultValueFiveDays)

export default function Weather({nameCity}: ComponentProps): React.JSX.Element {
    const [geocoding, setGeocoding] = useState<geocoding>({lat: 0, lon: 0});
    const [data, setData] = useState<data>(defaultValueFiveDays);
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
                setData(result.daily)
            })
            .catch(err => {
                console.log("Ошибка запроса");
            })
    }, [lat, lon])
    return (
    <WeatherFiveDaysContent.Provider value={data}>
        <div className={styles.wrap}>
            <h1 className={styles.wrap__title}>Прогноз погоды: {nameCity}</h1>
            <div className={styles.wrap__weather}>
                <CurrentWeather/>
                <WeatherToDay/>
            </div>
            
        </div>
    </WeatherFiveDaysContent.Provider>
    )
}
