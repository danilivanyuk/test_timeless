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
  
    function getBoxShadow() {
      const isBottom = clientHeight === scrollHeight - scrollTop;
      const isTop = scrollTop === 0;
      const isBetween = scrollTop > 0 && clientHeight < scrollHeight - scrollTop;
  
      let boxShadow = "none";
      const top = "inset0 8px 5px -5px white";
      const bottom = "inset 0 10px 0px -5px white";
  
      if (isTop) {
        boxShadow = bottom;
      } else if (isBetween) {
        boxShadow = `${top}, ${bottom}`;
      } else if (isBottom) {
        boxShadow = top;
      }
      return boxShadow;
    }
  
    return { boxShadow: getBoxShadow(), onScrollHandler };
  }

export function useStateManager() {
    const state = AppContainer
}

export const Card = () => {
    const {state, setState} = useGlobalState()
    const { boxShadow, onScrollHandler } = useScrollWithShadow();
    useEffect(()=>{
        console.log(state.users?.filter(obj => obj.dob.age > 41 && obj.dob.age < 50).length)
    },[])
    return (
        // TODO: Тень
        <div className={styles['usersContainer']} onScroll={onScrollHandler} style={{boxShadow}}>
            {state.users?.map((user: IUser) => (
                <UserCard user={user} key={user.login.uuid}/>
            ))}
        </div>
    )
}