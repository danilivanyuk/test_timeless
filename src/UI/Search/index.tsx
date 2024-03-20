import { useMemo, useRef, useState } from "react";
import { useGlobalState } from "../../Core/StateManager";
import styles from "./styles.module.scss";
import { IUser } from "../../Core/Interfaces/IUser";

export const Search = () => {
  const { state, setFilteredUsers } = useGlobalState();
  const [udpateSearch, setUpdateSearch] = useState("");

  const searchField = (usersArr: IUser[] | undefined, word: string) => {
    const foundItems = []
    if (usersArr) {
      for (let i = 0; i < usersArr.length; i++) {
        if (
          usersArr[i].name.first.includes(word) ||
          usersArr[i].email.includes(word) ||
          usersArr[i].phone.toString().includes(word) ||
          usersArr[i].dob.date.toString().includes(word) ||
          usersArr[i].location.street.name.includes(word)
        ) {
            foundItems.push(usersArr[i])
        }
      }
      return foundItems;
    } else {
      return [];
    }
  };
  
  const filterUsers = (word: string) => {
    if (word.length === 1 || word.length < udpateSearch.length) {
      const result = searchField(state.users, word)
      setFilteredUsers(result);
    } else {
      const result = searchField(state.filteredUsers, word);
      setFilteredUsers(result);
    }
    setUpdateSearch(word);
  };

  return (
    <div className={styles["searchContainer"]}>
      <input
        type="text"
        name="searchUsers"
        className={styles["searchInput"]}
        placeholder="Search"
        onChange={(e) => filterUsers(e.target.value)}
      />
    </div>
  );
};
