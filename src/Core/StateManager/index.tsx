import React, { Dispatch, SetStateAction, createContext, useContext, useState } from "react";
import { IUser } from "../Interfaces/IUser";
import { IGlobalState } from "../Interfaces/IState";

export const StateContext = createContext({
  state: {} as Partial<IGlobalState>,
  setState: {} as Dispatch<SetStateAction<Partial<IGlobalState>>>,
});

interface IStateProvider {
  children: React.ReactNode | React.ReactNode[],
  value?: Partial<IGlobalState>
}

const StateProvider = ({
  children,
  value = {} as IGlobalState,
}: IStateProvider) => {
  const [state, setState] = useState(value);
  const setAgeGroup = () => {
    state.users?.filter(obj => obj.dob.age > 21 && obj.dob.age < 30)
  }
  return (
    <StateContext.Provider value={{ state, setState }}>
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

export {StateProvider, useGlobalState};