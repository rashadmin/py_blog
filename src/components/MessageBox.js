import React from 'react'

function MessageBox(props) {
  return (
    <div className={props.sender === "User"? 'right': 'left'} key={props.index}>
    <strong>{props.sender[0]}</strong> {props.msg}
  </div>
  )
}

export default MessageBox