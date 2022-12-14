import React from 'react'
import styled from 'styled-components'
import { createUser } from '../../methods/apis/createUser'
import { useState, useCallback } from 'react'

type Props = {
  email: string
  setEmail: React.Dispatch<React.SetStateAction<string>>
  password: string
  setPassword: React.Dispatch<React.SetStateAction<string>>
  passwordConfirmation: string
  setPasswordConfirmation: React.Dispatch<React.SetStateAction<string>>
  handleSubmit: any
}

const Title = styled.h1`
  text-align: center
  font-size: 34px
`

const FormContainer = styled.div`
  text-align: center;
`
const InputContainer = styled.div`
  margin-bottom: 20px;
`

const Component = React.memo(function Component(props: Props) {
  return (
    <>
      <FormContainer>
        <Title>新規登録</Title>
        <form onSubmit={props.handleSubmit}>
          <InputContainer>
            <input
              type="email"
              name="email"
              placeholder="メールアドレス"
              value={props.email}
              onChange={(e) => props.setEmail(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <input
              type="password"
              name="password"
              placeholder="パスワード"
              value={props.password}
              onChange={(e) => props.setPassword(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <input
              type="password"
              name="passwordConfirmation"
              placeholder="パスワード確認"
              value={props.passwordConfirmation}
              onChange={(e) => props.setPasswordConfirmation(e.target.value)}
            />
          </InputContainer>
          <button type="submit">登録</button>
        </form>
      </FormContainer>
    </>
  )
})

const Container = React.memo(function Container() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const handleSubmit = useCallback(
    (e: any) => {
      createUser({ email, password, passwordConfirmation })
      e.preventDefault()
    },
    [email, password, passwordConfirmation],
  )

  return (
    <Component
      {...{
        email,
        setEmail,
        password,
        setPassword,
        passwordConfirmation,
        setPasswordConfirmation,
        handleSubmit,
      }}
    />
  )
})

export { Container as RegisterPage }
