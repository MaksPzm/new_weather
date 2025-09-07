import React, { ChangeEvent, RefObject, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useFentchCityWeather } from "../../Api/api";
import styles from "./definingCity.module.scss"
import { log } from "console";

interface ComponentProps {
    nameCity: Function
}

type elRef = RefObject<HTMLInputElement>;
type data = string;

export default function DefiningCity({nameCity}: ComponentProps): React.JSX.Element {
    const [nav, setNav] = useState<{lat: number, lon: number}>({lat: 0, lon: 0});
    const [city, setCity] = useState<string>("Москва")
    const showBlockСhoosingCity: boolean = false;
    // const [showBlockСhoosingCity, setShowBlockСhoosingCity] = useState<boolean>(false);
    const elRef = useRef<unknown>(null) as elRef;
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords
        setNav({lat: latitude, lon: longitude})
        })
    }, [])
    const data = useFentchCityWeather(nav.lat, nav.lon);
    const { name } = data;
    useEffect(() => {
            if (typeof name !== "string") return;
            setCity(name)
    }, [data])
    const clickY = useCallback(() => {
        if (typeof name !== "string") return;
        setCity(name)
        nameCity(city, showBlockСhoosingCity);
    }, [city]);
    const clickN = useCallback(() => {
        if (elRef !== null) {
            return elRef.current.focus()
        }
    }, []);
    const clickDone = useCallback(()=> {
        // setShowBlockСhoosingCity(false);
        nameCity(city, showBlockСhoosingCity);
    }, [city, showBlockСhoosingCity])
    const handlerKeyPress = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
        const { key } = e;
        if (key === "Enter") {
            clickDone()
        }
    }, [city, showBlockСhoosingCity]);
    
    return (
        <div className={styles.definingCity}>
            <div className={styles.definingCity__geo}>
                <div className={styles.definingCity__geo_city}>Показать погоду в н/п: 
                    <span className={styles.definingCity__geo_city_name}> {name}?</span>
                </div>
                <div className={styles.definingCity__geo_blockBtn}>
                    <button className={styles.definingCity__geo_blockBtn_btn} onClick={clickY} type="button">Да</button>
                    <button className={styles.definingCity__geo_blockBtn_btn} onClick={clickN} type="button">Нет</button>
                </div>
            </div>
            <div className={styles.definingCity__blockSearch}>
                <input className={styles.definingCity__blockSearch_input}
                    onKeyDown={handlerKeyPress} 
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setCity(e.target.value)
                    }} ref={elRef} type="text" placeholder="Введите нужный город"
                />
                <button className={styles.definingCity__blockSearch_btn} onClick={clickDone} type="button">Готово</button> 
            </div>
           
        </div>
    )
}