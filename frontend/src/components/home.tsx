import { memo, useCallback, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { LoggedInStatus } from './LoggedInStatusProvider'
import { RegisterPage } from './noAuth/Register'

// type ContainerProps = {}

type Props = {
  loggedInStatus: string
  handleSuccessfulAuthentication: () => void
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
      <RegisterPage
        handleSuccessfulAuthentication={props.handleSuccessfulAuthentication}
      />
    </>
  )
})

const Container = memo(function Container() {
  const navigation = useNavigate()
  const handleSuccessfulAuthentication = useCallback(() => {
    navigation('/dashboard')
  }, [navigation])
  const loggedInStatus = useContext(LoggedInStatus)
  return <Component {...{ loggedInStatus, handleSuccessfulAuthentication }} />
})

export { Container as Home }
