import { useEffect, useRef, useState } from "react"
import { UserCard } from "../UserCard"
import styles from "./styles.module.scss"
import { IUser } from "../../Core/Interfaces/IUser"
import AppContainer from "../../Core/SingletonObject"
import { useGlobalState } from "../../Core/StateManager"

export function useScrollWithShadow() {
    const [scrollTop, setScrollTop] = useState(0);
    const [scrollHeight, setScrollHeight] = useState(0);
    const [clientHeight, setClientHeight] = useState(0);
  
    const onScrollHandler = (event: any) => {
      setScrollTop(event.target.scrollTop);
      setScrollHeight(event.target.scrollHeight);
      setClientHeight(event.target.clientHeight);
    };
  
    function isShowShadow(): boolean {
      const isBottom = clientHeight === scrollHeight - scrollTop;
      const isTop = scrollTop === 0;
      const isBetween = scrollTop > 0 && clientHeight < scrollHeight - scrollTop;
      
      let shadow = false;
      if (isTop) {
        shadow = false;
      } else if (isBetween) {
        shadow = true;
      } else if (isBottom) {
        shadow = true;
      }
      return shadow;
    }
  
    return { showShadow: isShowShadow(), onScrollHandler };
  }

export function useStateManager() {
    const state = AppContainer
}

export const Card = () => {
    const {state, setState} = useGlobalState()
    const { showShadow, onScrollHandler } = useScrollWithShadow();
    useEffect(()=>{
        console.log(state.users?.filter(obj => obj.dob.age > 41 && obj.dob.age < 50).length)
    },[])
    return (
        // TODO: Тень
        <div className={`${styles['usersContainer']} ${showShadow && styles['usersContainerWithShadow']}`} onScroll={onScrollHandler}>
          {showShadow && <div className={styles['shadowTop']}></div>}
              {state.users?.map((user: IUser) => (
                  <UserCard user={user} key={user.login.uuid}/>
              ))}

        </div>
    )
}