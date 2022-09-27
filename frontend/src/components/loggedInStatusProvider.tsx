import { memo, ReactNode } from 'react'
import { createContext } from 'react'

type Props = {
  children: ReactNode
}

export const LoggedInStatus = createContext<string>('')

export const LoggedInStatusProvider = memo(function LoggedInStatusProvider({
  children,
}: Props) {
  return (
    <LoggedInStatus.Provider value={'未ログイン'}>
      {children}
    </LoggedInStatus.Provider>
  )
})
