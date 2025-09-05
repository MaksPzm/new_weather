import React, { useEffect, useState } from "react";
import { useFentchCityWeather } from "../../Api/api";
import styles from "./definingCity.module.scss"

interface ComponentProps {
    nameCity: Function
}

export default function DefiningCity({nameCity}: ComponentProps): React.JSX.Element {
    const [nav, setNav] = useState<{lat: number, lon: number}>({lat: 0, lon: 0});
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords
        setNav({lat: latitude, lon: longitude})
        })
        
    }, [])
    console.log("nav", nav.lat);
    
    const data = useFentchCityWeather(nav.lat, nav.lon);
    console.log("data", data);
    
    return (
        <div className={styles.definingCity}>
            <div className={styles.definingCity__geo}>
                <div className={styles.definingCity__geo_city}>Ваш город: 
                    <span className={styles.definingCity__geo_city_name}>{data.name}</span>?
                </div>
                <div className={styles.definingCity__geo_blockBtn}>
                    <button className={styles.definingCity__geo_blockBtn_btn} type="button">Да</button>
                    <button className={styles.definingCity__geo_blockBtn_btn} type="button">Нет</button>
                </div>
            </div>
            <input className={styles.definingCity__input} type="text" placeholder="Введите ваш город"/>
        </div>
    )
}