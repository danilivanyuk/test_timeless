import { UIEvent, useState } from "react"
import { UserCard } from "../UserCard"
import styles from "./styles.module.scss"
import { IUser } from "../../Core/Interfaces/IUser"
import { useGlobalState } from "../../Core/StateManager"
import { useScrollWithShadow } from "../../Core/Hooks/scrollShadowHook"


export const Card = () => {
    const { state } = useGlobalState()
    const { showShadow, onScrollHandler } = useScrollWithShadow();
    return (
        <div className={`${styles['usersContainer']} ${showShadow && styles['usersContainerWithShadow']}`} onScroll={onScrollHandler}>
          {showShadow && <div className={styles['shadowTop']}></div>}
            {state.filteredUsers ? 
              state.filteredUsers?.map((user: IUser) => (
                <UserCard user={user} key={user.login.uuid}/>
              ))
            :
            // TODO: добавить библиотеку по Virtualized list
              state.users?.map((user: IUser) => (
                  <UserCard user={user} key={user.login.uuid}/>
                ))
            }
          {showShadow && <div className={styles['shadowBottom']}></div>}
        </div>
    )
}