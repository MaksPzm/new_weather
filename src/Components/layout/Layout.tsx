import React, { useState } from "react"
import styles from "./layout.module.scss"
import DefiningCity from "../definingCity/DefiningCity"

export default function Layout(): React.JSX.Element {
    const [city, setCity] = useState<string>("");
    const nameCity = (name: string) => {
        setCity(name)
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__section}>
                <DefiningCity nameCity={nameCity}/>
            </div>
        </div>
    )
}