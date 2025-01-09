import React from 'react'
import Body from '../components/Body'
import HistoryCard from '../components/HistoryCard'
import  Container  from 'react-bootstrap/Container'
import { useState,useEffect } from 'react'
import { useApi } from '../contexts/ApiProvider'
import Spinner from 'react-bootstrap/Spinner'

export default function History() {
    const [history,setHistory] = useState()
    const api = useApi();
    useEffect(() => {
        (async () => {
        setTimeout(
            async () => {const hists = await api['hists']
                        setHistory(hists!==undefined ? hists : null);

        }, 5000);

        })();
    }, [api]);
  return (
    <Body>
       <h1>History</h1>
       <Container>

       {history === undefined ? 
          <Spinner animation="border" />
          :
          history.length === 0 ? 
          <h1>Empty History</h1>
            :
            history.map(hist => <HistoryCard id={hist.id} title = {hist.title} timestamp={hist.timestamp} status={hist.status}/>)   
    }
  
       </Container>
      </Body>
  )
}
