import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  text-align: center;
  font-size: 34px;
`

const Dashboard = React.memo(function Home() {
  return (
    <>
      <Title>Dashboard</Title>
    </>
  )
})

export { Dashboard }
