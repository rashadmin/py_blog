import React from 'react'
import { FaRobot } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

function MessageBox(props) {
  return (
    props.sender === "User" ?
    <div className='right' key={props.index}>
    <strong><FaRobot/></strong> <p>{props.msg}</p><strong><FaRobot/></strong>
    </div>
    :
    <div className='left' key={props.index}>
    <strong><FaUser/></strong> <p>{props.msg}</p><strong><FaUser/></strong>
    </div>
  )
}

export default MessageBox