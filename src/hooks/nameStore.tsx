import React, { createContext, useEffect, useReducer } from "react";

import { NameReducer, State } from './nameReducer';

const storedName = localStorage.getItem("token");

const initialState = {
  name: JSON.parse(storedName ?? "")
};

interface NameStoreProps {
  children: React.ReactNode;
}

export function NameStore({ children }: NameStoreProps) {
    const [state, dispatch] = useReducer(NameReducer, initialState);

    useEffect(() => {
      sessionStorage.setItem("name", JSON.stringify(state.name));
    }, [state.name]);

    return (
      <NameContext.Provider value={{state, dispatch}}>
          {children}
      </NameContext.Provider>
    )
};

export const NameContext = createContext<{
  state: State;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null
});