import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import TodoElement from "./TodoElement";
import { v4 as uuid } from 'uuid';
import Image from 'next/image';

import React, { useState } from "react";
import styled from "styled-components";


const TodoRendering = () => {
  const { data: session, status } = useSession()
  const todos = useSelector(state => state.todos.todos)

  console.log(todos);
  

  let userId = "null"
  if (session) {
    userId = session.user.email
  }

  const personalTodos = todos.filter(todo => todo.userId === userId)

  if (status === "loading") {
    return <div className="bouncing-loader">
      <div></div>
      <div></div>
      <div></div>
    </div>
  }

  const renderTodos = personalTodos?.map(todo => {
    return (
        <TodoElement key={todo.id} todo={todo} />
    )
  })

  return (
    <div key={uuid()} className="todoRender">

      {/*  JAETAAN RUUTU kahteen osaan, VASEN ja OIKEA  */}
      <div className="row">

            {/*  VASEN kolumni  */}
            <div className="column">
                <h1>Asanat:</h1>
                {renderTodos}
            </div> 

            {/*  OIKEAkolumni  */}
            <div className="column">
                <h1>Harjoitus:</h1>
            </div> 

      </div>        
    </div>
  )
}

export default TodoRendering

{/*  

*/}