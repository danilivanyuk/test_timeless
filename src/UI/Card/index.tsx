import { useEffect, useRef, useState } from "react"
import { UserCard } from "../UserCard"
import styles from "./styles.module.scss"
import fetchUsers, { mockedValue } from "../../Core/Api"
import { IUser } from "../../Core/Interfaces/IUser"

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

export const Card = () => {
    const [users, setUsers] = useState<IUser[]>()
    const { boxShadow, onScrollHandler } = useScrollWithShadow();


    const getUsers = async() => {
        setUsers(mockedValue.results)
    }
    useEffect (() => {
        getUsers()

    }, [])
    return (
        // TODO: Тень
        <div className={styles['usersContainer']} onScroll={onScrollHandler} style={{boxShadow}}>
            {users?.map((user) => (
                <UserCard user={user} key={user.id.name}/>
            ))}
        </div>
    )
}