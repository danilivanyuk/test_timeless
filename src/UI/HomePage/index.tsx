import { Card } from "../Card"
import { Search } from "../Search"
import { StatsField } from "../StatsField"
import styles from "./styles.module.scss"
export const HomePage = () => {
    return (
        <div className={styles['mainPage']}>
            <div className={styles['topSection']}>
                <Search />
                <p>Refresh Users</p>
            </div>
            <div className={styles['mainSection']}>
                <Card />
                <StatsField />
            </div>
        </div>
    )
}