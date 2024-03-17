import { useEffect } from "react"
import { Card } from "../Card"
import { Search } from "../Search"
import { StatsField } from "../StatsField"
import styles from "./styles.module.scss"
import AppContainer from "../../Core/SingletonObject"
import { mockedValue } from "../../Core/Api"
import { useGlobalState } from "../../Core/StateManager"
export const HomePage = () => {
    const {setState} = useGlobalState()
    useEffect(() => {
        setState({users: mockedValue.results})
    }, [])
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