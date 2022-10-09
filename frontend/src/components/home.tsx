import { memo, useContext } from 'react'
import styled from 'styled-components'
import { LoggedInStatus } from './LoggedInStatusProvider'
import { RegisterPage } from './noAuth/Register'

// type ContainerProps = {}

type Props = {
  loggedInStatus?: string
  handleLogin: any
}

const Title = styled.h1`
  text-align: center;
  font-size: 34px;
`

const LoginStatus = styled.h2`
  text-align: center;
  font-size: 28px;
`

const Component = memo(function Component(props: Props) {
  return (
    <>
      <Title>Home</Title>
      <LoginStatus>ログイン状態: {props.loggedInStatus}</LoginStatus>
      <RegisterPage handleLogin={props.handleLogin} />
    </>
  )
})

const Container = memo(function Container() {
  const { loggedInStatus, setLoggedInStatus } = useContext(LoggedInStatus)
  const handleLogin = () => {
    if (setLoggedInStatus) {
      setLoggedInStatus('ログイン中')
    }
  }
  return <Component {...{ loggedInStatus, handleLogin }} />
})

export { Container as Home }
