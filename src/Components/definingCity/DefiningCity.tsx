import React, { ChangeEvent, RefObject, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useFentchCityWeather } from "../../Api/api";
import styles from "./definingCity.module.scss"

interface ComponentProps {
    nameCity: Function
}

type elRef = RefObject<HTMLInputElement>;


export default function DefiningCity({nameCity}: ComponentProps): React.JSX.Element {
    const [nav, setNav] = useState<{lat: number, lon: number}>({lat: 0, lon: 0});
    const [city, setCity] = useState<null | string>(null)
    const [showBlockСhoosingCity, setShowBlockСhoosingCity] = useState<boolean>(true);
    const elRef = useRef<unknown>(null) as elRef;
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords
        setNav({lat: latitude, lon: longitude})
        })
    }, [])
    const data = useFentchCityWeather(nav.lat, nav.lon);
    const clickY = useCallback(() => {
        nameCity(data.name);
        setShowBlockСhoosingCity(false)
    }, [showBlockСhoosingCity])
    const clickN = useCallback(() => {
        if (elRef !== null) {
            return elRef.current.focus()
        }
    }, [])
    const clickDone = useCallback(()=> {
        nameCity(city);
        setShowBlockСhoosingCity(false)
    }, [showBlockСhoosingCity])
    console.log("city", city);
    
    return (
        <div className={styles.definingCity}>
            <div className={styles.definingCity__geo}>
                <div className={styles.definingCity__geo_city}>Ваш город: 
                    <span className={styles.definingCity__geo_city_name}> {data.name}?</span>
                </div>
                <div className={styles.definingCity__geo_blockBtn}>
                    <button className={styles.definingCity__geo_blockBtn_btn} onClick={clickY} type="button">Да</button>
                    <button className={styles.definingCity__geo_blockBtn_btn} onClick={clickN} type="button">Нет</button>
                </div>
            </div>
            <div className={styles.definingCity__blockSearch}>
                <input className={styles.definingCity__blockSearch_input} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setCity(e.target.value)
                }} ref={elRef} type="text" placeholder="Введите нужный город"/>
                <button className={styles.definingCity__blockSearch_btn} onClick={clickDone} type="button">Готово</button> 
            </div>
           
        </div>
    )
}