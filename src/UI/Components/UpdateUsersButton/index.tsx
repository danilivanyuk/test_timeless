import fetchUsers from "../../../Core/Api";
import { useGlobalState } from "../../../Core/StateManager";
import styles from "./styles.module.scss";


export const UpdateUsersButton = () => {
    const { setState } = useGlobalState()
    const updateUsers = async () => {
        const newUsers = await fetchUsers(500)
        setState({
            users: newUsers
        })
    }
    return (
        <div className={styles['refreshUsers']}>
            <p onClick={updateUsers}>Refresh Users</p>
        </div>
    )
}