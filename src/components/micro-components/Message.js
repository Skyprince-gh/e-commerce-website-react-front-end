import React, { useContext } from 'react'
import 'animate.css'
import style from './Message.module.css'
import {restaurantsContext} from '../../context/restaurantsContext'
import { accountsContext } from '../../context/accountsContext'


function Message({message}) {
  return (
    <div  className={style.grid+ " " +"animate__animated animate__slideInRight"}>
      <p>{message}</p>
    </div>
  )
}

export default Message

