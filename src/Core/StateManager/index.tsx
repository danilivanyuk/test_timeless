import React, { Dispatch, ReducerAction, SetStateAction, createContext, useContext, useState } from "react";
import { IGlobalState, ISetGroupsProps, IStateProvider } from "../Interfaces/IState";
import { IUser } from "../Interfaces/IUser";
import { Func } from "../Interfaces/ICore";

const initialState: IGlobalState = {
  users: [],
} 

export const StateContext = createContext({
  state: {} as Partial<IGlobalState>,
  setState: {} as Dispatch<SetStateAction<IGlobalState>>,
  setGroups: {} as Func<ISetGroupsProps, void>,
  setFilteredUsers: {} as Func<IUser[] | undefined, void>
});



const StateProvider = ({
  children,
}: IStateProvider) => {
  const [state, setState] = useState<IGlobalState>(initialState);

  const setGroups = (props: ISetGroupsProps): void => {
    setState({
      ...state,
      groups: {
        ageGroup: props.ageGroup,
        genderGroup: props.genderGroup
      }
    })
  }

  const setFilteredUsers = (filteredUsers: IUser[] | undefined): void => {
    setState({
      ...state,
      filteredUsers
    })
  }
  return (
    <StateContext.Provider value={{ state, setState, setGroups, setFilteredUsers }}>
      {children}
    </StateContext.Provider>
  );
};



const useGlobalState = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateContext");
  }
  return context;
};

export { StateProvider, useGlobalState };