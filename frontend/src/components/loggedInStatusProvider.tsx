import { memo, ReactNode, useState } from 'react'
import { createContext } from 'react'

type Props = {
  children: ReactNode
}

type LoggedInStatus = {
  loggedInStatus?: string
  setLoggedInStatus?: React.Dispatch<React.SetStateAction<string>>
}

export const LoggedInStatus = createContext<LoggedInStatus>({})

export const LoggedInStatusProvider = memo(function LoggedInStatusProvider({
  children,
}: Props) {
  const [loggedInStatus, setLoggedInStatus] = useState('未ログイン')
  const value = {
    loggedInStatus,
    setLoggedInStatus,
  }

  return (
    <LoggedInStatus.Provider value={value}>{children}</LoggedInStatus.Provider>
  )
})
