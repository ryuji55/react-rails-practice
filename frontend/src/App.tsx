import React from 'react'
import './App.css'
import styled from 'styled-components'
import { LoggedInStatusProvider } from './components/LoggedInStatusProvider'
import { Router } from './Router'

const Title = styled.h1`
  text-align: center;
  font-size: 34px;
`

const App = React.memo(function App() {
  return (
    <>
      <Title>ReactPractice</Title>
      <LoggedInStatusProvider>
        <Router />
      </LoggedInStatusProvider>
    </>
  )
})

export { App }
