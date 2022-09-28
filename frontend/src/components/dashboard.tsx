import styled from 'styled-components'
import { memo } from 'react'

const Title = styled.h1`
  text-align: center;
  font-size: 34px;
`

const Dashboard = memo(function Home() {
  return (
    <>
      <Title>Dashboard</Title>
    </>
  )
})

export { Dashboard }
