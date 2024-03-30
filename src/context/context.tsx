import { useState, createContext, Dispatch, SetStateAction } from "react"

type TContextProvider = {
  children: React.ReactNode
}

type TState = {
  showMobileMenu: boolean
  showUserMenu: boolean
}

type TContext = {
  state: TState
  setState: Dispatch<SetStateAction<TState>>
}

export const initialState: TState = {
  showMobileMenu: false,
  showUserMenu: false,
}

export const MenuContext = createContext<TContext>({
  state: initialState,
  setState: () => {},
})

export const MenuContextProvider = ({ children }: TContextProvider) => {
  const [state, setState] = useState(initialState)

  return (
    <MenuContext.Provider value={{ state, setState }}>
      {children}
    </MenuContext.Provider>
  )
}
