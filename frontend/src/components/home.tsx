import React, { useContext } from 'react'
import styled from 'styled-components'
import { LoggedInStatus } from './loggedInStatusProvider'
import { RegisterPage } from './noAuth/register'

// type ContainerProps = {}

type Props = {
  loggedInStatus: string
}

const Title = styled.h1`
  text-align: center;
  font-size: 34px;
`

const LoginStatus = styled.h2`
  text-align: center;
  font-size: 28px;
`

const Component = React.memo(function Component(props: Props) {
  return (
    <>
      <Title>Home</Title>
      <LoginStatus>ログイン状態: {props.loggedInStatus}</LoginStatus>
      <RegisterPage />
    </>
  )
})

const Container = React.memo(function Container() {
  const loggedInStatus = useContext(LoggedInStatus)
  return <Component {...{ loggedInStatus }} />
})

export { Container as Home }
