//for tracking the basket

import React, { createContext, useContext, useReducer } from "react";

// Data Layer
export const StateContext = createContext();

//build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//how to use it inside the container

export const useStateValue = () => useContext(StateContext);
