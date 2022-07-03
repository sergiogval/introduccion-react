import React from 'react'
import { ListItem, Span } from './styles'

export const TodoItem = (props) => {
  return (
    <ListItem>
      <Span>√</Span>
      <p>{props.text}</p>
      <Span>X</Span>
    </ListItem>
  )
}
