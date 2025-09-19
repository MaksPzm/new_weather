import React, { useContext, useEffect, useState } from "react";
import styles from "./weatherFiveDays.module.scss"
import { WeatherFiveDaysContent } from "../weather/Weather";
import WDay from "../wDay/WDay";

export default function WeatherFiveDays(): React.JSX.Element {
    const {data} = useContext(WeatherFiveDaysContent);
    const date = new Date;
    return (
        <div className={styles.weatFDays}>
            {data.map((value, index) => {
                if (index < 5) {
                    return <WDay 
                        num={index}
                        tempMax={Math.round(value.all_day.temperature_max)}
                        tempMin={Math.round(value.all_day.temperature_min)}
                        icon={value.all_day.icon}
                        date={index == 0 ? new Date(date.setDate(date.getDate() + 0)).toLocaleDateString() 
                            : new Date(date.setDate(date.getDate() + 1)).toLocaleDateString()}
                    />   
                }
            })}
        </div>
    )
}