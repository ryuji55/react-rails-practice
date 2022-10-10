import styled from 'styled-components'
import { memo, useContext } from 'react'
import { LoggedInStatus } from './LoggedInStatusProvider'

const Title = styled.h1`
  text-align: center;
  font-size: 34px;
`

const LoginStatus = styled.h2`
  text-align: center;
  font-size: 28px;
`

const Dashboard = memo(function Home() {
  const { loggedInStatus } = useContext(LoggedInStatus)
  return (
    <>
      <Title>Dashboard</Title>
      <LoginStatus>ログイン状態: {loggedInStatus}</LoginStatus>
    </>
  )
})

export { Dashboard }
