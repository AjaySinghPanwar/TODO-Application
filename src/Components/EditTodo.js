import React from 'react';

function EditTodo(props) {
  return (
    <>
      <button onClick={() => props.handleEdit(props.idToEdit)}>Edit Todo</button>
    </>
  );
}

export default EditTodo;
