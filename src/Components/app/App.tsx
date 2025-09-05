import React from "react"
import Layout from "../layout/Layout"
import styles from "./app.module.scss"

export default function App(): React.JSX.Element {
    return (
        <div className={styles.body}>
            <Layout/>  
        </div>
    )
}