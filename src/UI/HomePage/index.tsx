import { useEffect } from "react"
import { Card } from "../Card"
import { Search } from "../Search"
import { StatsField } from "../StatsField"
import styles from "./styles.module.scss"
import fetchUsers, { mockedValue } from "../../Core/Api"
import { useGlobalState } from "../../Core/StateManager"
import { UpdateUsersButton } from "../Components/UpdateUsersButton"
export const HomePage = () => {
    const {setState} = useGlobalState()
    const getUsers = async () => {
        const users = await fetchUsers(500)
        setState({ users })
    }
    useEffect(() => {
        // TODO: раскомментить
        // getUsers()
        setState({users: mockedValue.results})
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