import React, { createContext, useContext, useReducer } from 'react'
import { appReducer } from './reducer'
import { FormState } from './form-state'
import { Action } from './actions'
import { initialState } from './initial-state'

const StateContext = createContext<[FormState, React.Dispatch<Action>]>(null as any)

type ContextProviderProps = {
  children: React.ReactNode
}

export const StateProvider = (props: ContextProviderProps) => {
  const reducer = useReducer(appReducer, initialState)
  return <StateContext.Provider value={reducer}>{props.children}</StateContext.Provider>
}

export const useAppState = () => {
  // tslint:disable-next-line: react-hooks-nesting
  return useContext(StateContext)
}
