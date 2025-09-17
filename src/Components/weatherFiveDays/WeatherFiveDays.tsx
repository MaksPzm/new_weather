import React, { useContext } from "react";
import styles from "./weatherFiveDays.module.scss"
import { WeatherFiveDaysContent } from "../weather/Weather";
import WDay from "../wDay/WDay";

export default function WeatherFiveDays(): React.JSX.Element {
    const {data} = useContext(WeatherFiveDaysContent);
    console.log('data: ', data);
    return (
        <div className={styles.weatFDays}>
            {data.map((value, index) => {
                if (index < 5) {
                    return <WDay 
                        key={index}
                        tempMax={Math.round(value.all_day.temperature_max)}
                        tempMin={Math.round(value.all_day.temperature_min)}
                        icon={value.all_day.icon}
                    />   
                }
            })}
        </div>
    )
}