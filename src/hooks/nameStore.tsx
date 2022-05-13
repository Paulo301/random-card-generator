import React, { createContext, useEffect, useReducer } from "react";

import { NameReducer, State } from './nameReducer';

const storedName = sessionStorage.getItem("name");

const initialState = {
  name: storedName ?? ""
};

interface NameStoreProps {
  children: React.ReactNode;
}

export function NameStore({ children }: NameStoreProps) {
    const [state, dispatch] = useReducer(NameReducer, initialState);

    useEffect(() => {
      sessionStorage.setItem("name", state.name);
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