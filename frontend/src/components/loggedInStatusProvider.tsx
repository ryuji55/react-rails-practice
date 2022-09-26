import { memo, ReactNode } from 'react'
import { createContext } from 'react'
import { LoggedInStatus } from '../App'

type Props = {
  children: ReactNode
}

export const LoggenInStatus = createContext<string>('')

export const LoggedInStatusProvider = memo(function LoggedInStatusProvider({
  children,
}: Props) {
  return (
    <LoggedInStatus.Provider value={'未ログイン'}>
      {children}
    </LoggedInStatus.Provider>
  )
})
