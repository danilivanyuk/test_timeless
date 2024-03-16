import { useEffect, useState } from "react"
import { UserCard } from "../UserCard"
import styles from "./styles.module.scss"
import fetchUsers, { mockedValue } from "../../Core/Api"
import { IUser } from "../../Core/Interfaces/IUser"


// TODO: https://dev.to/vt2730/react-virtualized-list-from-scratch-121j
export const Card = () => {
    const [users, setUsers] = useState<IUser[]>()
    const [scrollTop, setScrollTop] = useState(0);
    const itemHeight = 196
    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = Math.min(startIndex + Math.ceil(1000 / itemHeight), users?.length || 0);

    const visibleItems = users?.slice(startIndex, endIndex);

    // TODO: Убрать any
    const handleScroll = (event: any) => {
        setScrollTop(event.target.scrollTop);
    };

    const getUsers = async() => {
        setUsers(mockedValue.results)
    }
    useEffect (() => {
        getUsers()

    }, [])
    return (
        <div className={styles['usersContainer']} onScroll={handleScroll}>
            {users?.map((user) => (
                <UserCard user={user} key={user.id.name}/>
            ))}
        </div>
    )
}