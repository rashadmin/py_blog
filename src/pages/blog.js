import React from 'react'
import Body from '../components/Body'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import CopyCard from '../components/Copy'
import { useApi } from '../contexts/ApiProvider'
import PostCard from '../components/PostCard'
import Spinner from 'react-bootstrap/Spinner'
// import ChatBox from '../components/ChatBox'




export default function Blog() {
  const {blog_id} = useParams();
  const [history,setHistory] = useState()
  const api = useApi();

  useEffect(() => {
    (async () => {
      setTimeout(
        async () => {const hist_response = await api['hists']
                    setHistory(hist_response!==undefined ? hist_response : null);

      }, 5000);

    })();
  }, [api]);


  const new_data = blog_id && history ? history[parseInt(blog_id) - 1] : undefined;
  return (
    <Body>
    <h1>Blog</h1>
    <Container>
     {  new_data===undefined  ?
        // // <ChatBox chat={chat}/>
        <>
        <h1>Posts</h1>
        <p>Several blog post of all social media and its content</p>

         {history === undefined ? 
          <Spinner animation="border" />
          :
          history.map((eachs) => (
            <PostCard
              key={eachs.id} // Use a unique identifier from each object
              title={eachs['title']}
              media={eachs['social_media'][0]}
              content={eachs['description']}
            />
          ))}
        </>
        :
        new_data['social_media'].map((media,index) => <CopyCard key = {index} title={new_data.title} media={media} content={new_data.description} status={new_data.status}/>)
        } 
       </Container>
   </Body>
  )
};