import React from 'react'
import { ListItem, Span } from './styles'

export const TodoItem = (props) => {
  return (
    <ListItem>
      <input type='checkbox' />
      <p>{props.text}</p>
      <Span>X</Span>
    </ListItem>
  )
}
