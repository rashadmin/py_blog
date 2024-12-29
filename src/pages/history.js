import React from 'react'
import Body from '../components/Body'
import HistoryCard from '../components/HistoryCard'
import  Container  from 'react-bootstrap/Container'
import { useState } from 'react'

const hists = 
    [
        {
            id: 1,
            title: 'Exploring the Unknown',
            timestamp: '2 hours ago'
        },
        {
            id: 2,
            title: 'Adventures in the Wild',
            timestamp: '5 minutes ago'
        },
        {
            id: 3,
            title: 'Technology and Tomorrow',
            timestamp: '30 seconds ago'
        },
        {
            id: 4,
            title: 'A Journey Through Time',
            timestamp: '1 day ago'
        },
        {
            id: 5,
            title: 'Reflections on Progress',
            timestamp: '3 hours ago'
        }
    ]
    

export default function History() {
  return (
    <Body>
       <h1>History</h1>
       <Container>
       {hists.length === 0 ? 
       <h1>Empty History</h1>
        :
        hists.map(hist => <HistoryCard id={hist.id} title = {hist.title} timestamp={hist.timestamp}/>)   
    }
  
       </Container>
      </Body>
  )
}
