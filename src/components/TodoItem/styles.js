import styled from "styled-components";

export const ListItem = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  text-align: left;
  font-weight: bold;
  border: solid 1px black;
  `

export const Span = styled.span`
display: flex;
justify-content: center;
align-items: center;
padding: 1rem;
cursor: pointer;
color: white;
background: red;
height: 14px;
width: 14px;
padding: 0;
margin: 0;
margin-top: -7px;
margin-right: -7px;
border-radius: 50%;
font-size: .5rem;
`