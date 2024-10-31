import { createContext, useState } from 'react'
import { getAccesTokenFromLs } from '../utils/auth'

interface AppcontextInterface {
  isAuthenticated: boolean
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
}

const initialAppContext: AppcontextInterface = {
  isAuthenticated: Boolean(getAccesTokenFromLs()),
  setIsAuthenticated: () => null
}
export const AppContext = createContext<AppcontextInterface>(initialAppContext)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>
  (initialAppContext.isAuthenticated)
  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
