import React from 'react'
import { List } from './styles'

export const TodoList = (props) => {
  return (
    <section>
      <List>
        {props.children}
      </List>
    </section>
  )
}

