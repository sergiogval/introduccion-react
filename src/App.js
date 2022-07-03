
import './App.css';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';

const todos = [
  {text: 'cortar cabello', completed: false},
  {text: 'comprar comida', completed: false},
  {text: 'ir a la playa', completed: false},
  {text: 'hacer ejercicio', completed: false},
]

const App = () => {
  return (
    <>
      <TodoCounter />    
      <TodoSearch />
      <input type='text' placeholder='Buscar tarea...' />
      <TodoList>
        {todos.map(todo => (
        <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>
      <CreateTodoButton /> 
    </>
  );
}

export default App;
