import React, { createContext } from 'react'
import './App.css'
import styled from 'styled-components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './components/home'
import { Dashboard } from './components/dashboard'
import { LoggedInStatusProvider } from './components/loggedInStatusProvider'

const Title = styled.h1`
  text-align: center;
  font-size: 34px;
`

export const LoggedInStatus = createContext('')

const App = React.memo(function App() {
  return (
    <>
      <Title>ReactPractice</Title>
      <LoggedInStatusProvider>
        <BrowserRouter>
          <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/dashboard'} element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </LoggedInStatusProvider>
    </>
  )
})

export { App }
