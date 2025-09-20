import React, { RefObject, useCallback, useRef, useState } from "react";
import styles from "./citySearch.module.scss";
type inpRef = RefObject<HTMLInputElement>;
export default function CitySearch(): React.JSX.Element {
    const [city, setCity] = useState<string>("");
    const [changle, setChangle] = useState<string>("");
    const inputRef = useRef<HTMLInputElement>(null) as inpRef;
    const pressKey = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setChangle(e.target.value);
    }, [changle])
    const pressMouse = useCallback(() => {
        if (changle.length === 0) return;
        setCity(changle);
        setChangle("");
        if (inputRef !== null) inputRef.current.value = "";
    }, [changle, city]);
    const handlerKeyPress = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
        const {key} = e;
        if (key === "Enter") pressMouse()
    }, [city, changle]);
        
    return (
        <div className={styles.citySearch}>
            <input className={styles.citySearch__inp} type="text" ref={inputRef} onChange={pressKey} onKeyDown={handlerKeyPress} placeholder="Введите город"/>
            <button className={styles.citySearch__btn} type="button" onClick={pressMouse}>Поиск</button>
        </div>
    )
}