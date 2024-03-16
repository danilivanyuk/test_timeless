import { Card } from "../Card"
import { Search } from "../Search"
import { StatsField } from "../StatsField"
import styles from "./styles.module.scss"
export const HomePage = () => {
    return (
        <div className={styles['mainPage']}>
            <Search />
            <Card />
            <StatsField />
        </div>
    )
}