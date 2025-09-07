import React, { ReactNode, RefObject, useCallback, useEffect, useRef, useState } from "react"
import styles from "./layout.module.scss"
import DefiningCity from "../definingCity/DefiningCity"

export type elRefDiv = RefObject<HTMLDivElement>;

export default function Layout(): React.JSX.Element {
    const blockDefCity = useRef<unknown>(null) as elRefDiv;
    const blockWrapper = useRef<unknown>(null) as elRefDiv;
    const [city, setCity] = useState<string>("");
    const [showDefiningCity, setShowDefiningCity] = useState<boolean>(true);
    const nameCity = useCallback((name: string, showBlockDefiningCity: boolean) => {
        setCity(name)
        setShowDefiningCity(showBlockDefiningCity)
    }, []);
    useEffect(() => {
        if (!showDefiningCity) {
            blockDefCity.current.remove()
        } else {
            blockWrapper.current.insertAdjacentElement("afterbegin", blockDefCity.current)
        }
    }, [showDefiningCity])
    return (
        <div className={styles.wrapper} ref={blockWrapper}>
            <div className={styles.wrapper__defCity} ref={blockDefCity}>
                {showDefiningCity && <DefiningCity nameCity={nameCity}/>}
            </div>
            <div className={styles.wrapper__section}>
                

            </div>
        </div>
    )
}