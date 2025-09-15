import React, { useState } from "react";
import styles from "./weatherToDo.module.scss"
import CurrentWeather from "../currentWeather/CurrentWeather";

interface ComponentProps {
    resultToDo: {
        temperature: number,
        temperature_max: number,
        temperature_min: number,
        icon: number,
        wind: {
            angle: number,
            dir: string,
            speed: number
        } 
    },
    nameCity: string
}
type data = [];
type resultApi = {
    
}



export default function WeatherToDo({resultToDo, nameCity}: ComponentProps): React.JSX.Element {
    const {temperature, temperature_max, temperature_min, icon, wind} = resultToDo;
    // console.log(' weather: ',  weather);
    // const temperatureNow: any = weather === undefined ? 0 : weather.temperature;
    // console.log('temperatureNow: ', temperatureNow);
    return (
        <div className={styles.weather}>
            <h1 className={styles.weather__title}>Прогноз погоды: {nameCity}</h1>
            <div className={styles.weather__block}>
                <CurrentWeather/>
                {/* <div className={styles.weather__block_now}>
                    <h2 className={styles.weather__block_now_title}>Данные на текущий момент</h2>
                    <div className={styles.weather__block_now_section}>
                        <div className={styles.weather__block_now_section_cur}>
                            {Math.round(temperature)}
                            <span className={styles.weather__block_now_section_cur_c}>°C</span>
                            <img src={`./images/png/weather/big/${icon}.png`} alt="иконка погоды" 
                                className={styles.weather__block_now_section_cur_ico}
                            />  
                        </div>
                    </div>
                    <div className={styles.weather__block_now_section}>
                        <div className={styles.weather__block_now_section_wind}>Скорость ветра: {wind.speed}</div>
                        <div className={styles.weather__block_now_section_wind}>Направление: {wind.dir}</div>
                        <div className={styles.weather__block_now_section_wind}>Угол: {wind.angle}</div>
                    </div>
                </div> */}
                <div className={styles.weather__block_today}>

                </div>  
            </div>
            
        </div>
)
}