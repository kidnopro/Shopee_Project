import React, { createContext, useState } from 'react'
import { getAccesTokenFromLs, getProfileFromLs } from '../utils/auth'
import { User } from '../types/user.type'
import { ExtendedPurchase } from 'src/types/purchase.type'

interface AppcontextInterface {
  isAuthenticated: boolean
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
  profile: User | null
  setProfile: React.Dispatch<React.SetStateAction<User | null>>
  extendedPurchases: ExtendedPurchase[]
  setExtendedPurchases: React.Dispatch<React.SetStateAction<ExtendedPurchase[]>>
}

const initialAppContext: AppcontextInterface = {
  isAuthenticated: Boolean(getAccesTokenFromLs()),
  setIsAuthenticated: () => null,
  profile: getProfileFromLs(),
  setProfile: () => null,
  extendedPurchases: [],
  setExtendedPurchases: () => null
}
export const AppContext = createContext<AppcontextInterface>(initialAppContext)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(initialAppContext.isAuthenticated)
  const [extendedPurchases, setExtendedPurchases] = useState<ExtendedPurchase[]>(initialAppContext.extendedPurchases)
  const [profile, setProfile] = useState<User | null>(initialAppContext.profile)
  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        profile,
        setProfile,
        extendedPurchases,
        setExtendedPurchases
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
