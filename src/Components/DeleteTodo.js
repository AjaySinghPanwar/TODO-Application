import React from 'react';

function DeleteTodo(props) {
  return (
    <>
      <button onClick={() => props.handleDelete(props.idToDelete)}>Delete Todo</button>
    </>
  );
}

export default DeleteTodo;
