import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard } from './components/Dashboard'
import { Home } from './components/Home'

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
