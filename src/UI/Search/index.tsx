import { useRef, useState } from "react"
import { useGlobalState } from "../../Core/StateManager"
import styles from "./styles.module.scss"
import { IUser } from "../../Core/Interfaces/IUser"

export const Search = () => {
    const { state, setFilteredUsers } = useGlobalState()
    const [udpateSearch, setUpdateSearch] = useState('')

    const searchField = (usersArr: IUser[] | undefined, word: string) => {
        if (usersArr) {
            return usersArr.filter(user => user.name.first.includes(word) || user.email.includes(word) || user.phone.toString().includes(word) || user.dob.date.toString().includes(word) || user.location.street.name.includes(word))
        }
        else {
            return []
        }
    }
    
    const filterUsers = (word: string) => {
        if (word.length === 1 || word.length < udpateSearch.length) {
            const result = searchField(state.users, word)
            setFilteredUsers(result)
        }
        else {
            const result = searchField(state.filteredUsers, word)
            setFilteredUsers(result)
        }
        setUpdateSearch(word)
    }
    
    return (
        <div className={styles['searchContainer']}>
            <input type="text" name="searchUsers" className={styles['searchInput']} placeholder="Search" onChange={(e) => filterUsers(e.target.value)} />
        </div>
    )
}