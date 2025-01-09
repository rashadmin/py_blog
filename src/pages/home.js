import React from 'react'
import Body from '../components/Body'
import Container from 'react-bootstrap/Container'
import CopyCard from '../components/Copy'
import ChatBox from '../components/ChatBox'
import TextBox from '../components/TextBox'

const  chat = [
    {"user": "Hi, can you help me with my account issue?", "agent": "Sure, what seems to be the problem?"},
    {"user": "I can’t log in. It says my password is incorrect.", "agent": "Have you tried resetting your password?"},
    {"user": "Not yet. Can you guide me through it?", "agent": "Of course. Click 'Forgot Password' and follow the prompts."},
    {"user": "Alright, I’ll try that. Thanks!", "agent": "Okay."}
]

const new_data = 

    {
        title: "Career Advice",
        social_media: ["LinkedIn", "Facebook",'X'],
        description:"Get tips and insights on how to advance in your career, build your professional network, and leverage LinkedIn, Facebook, and X for career growth."
    }


export default function Home() {
    return (
        <Body>
       <h1>Home</h1>
       <Container className='zero-padding'>
        <TextBox/>
        {/* {chat[chat.length-1]['agent'] !== 'Okay.' ?
        <h1>Chatbot</h1>
        // <ChatBox chat={chat}/>
        :
        new_data['social_media'].map((media) => <CopyCard title={new_data.title} media={media} content={new_data.description}/>)
        }  */}
       </Container>
      </Body>
  )
}
