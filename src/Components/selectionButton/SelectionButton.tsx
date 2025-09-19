import React, { useCallback, useState } from "react";
import styles from "./selectionButton.module.scss"

interface ComponentProps {
    clickWeatherSelectionBtn: Function;
}

const SelectionButton = ({clickWeatherSelectionBtn}: ComponentProps): React.JSX.Element => {
    const [showFiveDays, setShowFiveDays] = useState<boolean>(true);
    const btnPress = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        setShowFiveDays(!showFiveDays)
        clickWeatherSelectionBtn(showFiveDays)
    }, [showFiveDays])
    return (
        <button type="button" className={styles.btn} onClick={btnPress}>
            {showFiveDays ? "Показать погоду сегодня" : "Показать погоду на 5 дней"}
        </button>
    )
}

export default SelectionButton;