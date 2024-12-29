import React from 'react'
import Body from '../components/Body'
import HistoryCard from '../components/HistoryCard'
import  Container  from 'react-bootstrap/Container'
export default function History() {
  return (
    <Body>
       <h1>History</h1>
       <Container>
        <HistoryCard/>
        <HistoryCard/>
        <HistoryCard/>
        <HistoryCard/>
        <HistoryCard/>
       </Container>
      </Body>
  )
}
