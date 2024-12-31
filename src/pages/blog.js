import React from 'react'
import Body from '../components/Body'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import CopyCard from '../components/Copy'
import { useApi } from '../contexts/ApiProvider'
import PostCard from '../components/PostCard'
// import ChatBox from '../components/ChatBox'

const  chat = [
  {"user": "Hi, can you help me with my account issue?", "agent": "Sure, what seems to be the problem?"},
  {"user": "I can’t log in. It says my password is incorrect.", "agent": "Have you tried resetting your password?"},
  {"user": "Not yet. Can you guide me through it?", "agent": "Of course. Click 'Forgot Password' and follow the prompts."},
  {"user": "Alright, I’ll try that. Thanks!", "agent": "Okay."}
]

const hists = 
[
  {
      id: 1,
      title: "Exploring the Unknown",
      timestamp: "2 hours ago",
      social_media: ["LinkedIn", "Facebook", "X"],
      description: "Dive into the mysteries of life and science, and share your discoveries on LinkedIn, Facebook, and X."
  },
  {
      id: 2,
      title: "Adventures in the Wild",
      timestamp: "5 minutes ago",
      social_media: ["LinkedIn", "Facebook", "X"],
      description: "Embark on thrilling adventures and learn how to connect with fellow explorers on social media platforms."
  },
  {
      id: 3,
      title: "Technology and Tomorrow",
      timestamp: "30 seconds ago",
      social_media: ["LinkedIn", "Facebook", "X"],
      description: "Discover how emerging technologies are shaping our future and engage with tech enthusiasts online."
  },
  {
      id: 4,
      title: "A Journey Through Time",
      timestamp: "1 day ago",
      social_media: ["LinkedIn", "Facebook", "X"],
      description: "Explore history's wonders and milestones, and discuss their impact on modern society through social media."
  },
  {
      id: 5,
      title: "Reflections on Progress",
      timestamp: "3 hours ago",
      social_media: ["LinkedIn", "Facebook", "X"],
      description: "Reflect on humanity's achievements and share your thoughts on progress and innovation with your network."
  }
]


export default function Blog() {
  const {blog_id} = useParams();
  // const [history,setHistory] = useState()
  // const api = useApi;

  // useEffect(() => {
  //   (async () => {
  //     const hist_response = await api['hists'];
  //     if (hist_response) {
  //       setHistory(hist_response);
  //     }
  //     else {
  //       setHistory(null);
  //     }
  //   })();
  // }, [api]);


  // {blog_id!==undefined && 
      const new_data =hists[blog_id-1]
  // console.log(new_data)
  return (
    <Body>
    <h1>Blog</h1>
    <h4>{blog_id}</h4>
    <Container>
     {  new_data===undefined  ?
        // // <ChatBox chat={chat}/>
        <>
        <h1>Posts</h1>
        <p>Several blog post of all social media and its content</p>
         {hists.map((eachs) => <PostCard title = {eachs['title']} media = {eachs['social_media'][0]}
                  content ={eachs['description']}/>)}
        </>
        :
        new_data['social_media'].map((media) => <CopyCard title={new_data.title} media={media} content={new_data.description}/>)
        } 
       </Container>
   </Body>
  )
};
