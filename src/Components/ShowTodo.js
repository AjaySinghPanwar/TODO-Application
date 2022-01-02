import React from 'react';
import DeleteTodo from './DeleteTodo';
import EditTodo from './EditTodo';
import '../style.css';

function ShowTodo(props) {
  return (
    <div>
      <h3>Your Todos will appear here</h3>
      <div id="show-todos">
        {props.todos.map((todo) => {
          return (
            <div id={todo.id}>
              {todo.title}
              <EditTodo idToEdit={todo.id} handleEdit={props.handleEdit} />
              <DeleteTodo
                idToDelete={todo.id}
                handleDelete={props.handleDelete}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShowTodo;
