import React from 'react'
import './App.css'
import styled from 'styled-components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './components/home'
import { Dashboard } from './components/dashboard'

const Title = styled.h1`
  text-align: center;
  font-size: 34px;
`

const App = React.memo(function App() {
  return (
    <>
      <Title>ReactPractice</Title>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/dashboard'} element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
})

export { App }
