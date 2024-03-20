import fetchUsers from "../../../Core/Api";
import { useGlobalState } from "../../../Core/StateManager";
import styles from "./styles.module.scss";


export const UpdateUsersButton = () => {
    const { state, setState } = useGlobalState()
    const updateUsers = async () => {
        try {
            const newUsers = await fetchUsers(500)
            setState({
                ...state,
                users: newUsers
            })
        }
        catch {
            console.log('modal with error')
        }
    }
    return (
        <div className={styles['refreshUsers']}>
            <p onClick={updateUsers}>Refresh Users</p>
        </div>
    )
}