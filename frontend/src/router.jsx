import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard } from './components/dashboard'
import { Home } from './components/home'

const Component = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/dashboard'} element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export { Component as Router }
