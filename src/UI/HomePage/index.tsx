import { useEffect } from "react"
import { Card } from "../Card"
import { Search } from "../Search"
import { StatsField } from "../StatsField"
import styles from "./styles.module.scss"
import fetchUsers from "../../Core/Api"
import { useGlobalState } from "../../Core/StateManager"
import { UpdateUsersButton } from "../Components/UpdateUsersButton"

export const HomePage = () => {
    const {setState} = useGlobalState()
    const getUsers = async () => {
        try {
            const users = await fetchUsers(500)
            setState({ users })
        }
        catch {
            console.log('modal with error')
        }
    }
    useEffect(() => {
        getUsers()
    }, [])
    return (
        <div className={styles['mainPage']}>
            <div className={styles['topSection']}>
                <Search />
                <UpdateUsersButton />
            </div>
            <div className={styles['mainSection']}>
                <Card />
                <StatsField />
            </div>
        </div>
    )
}