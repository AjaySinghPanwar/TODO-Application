import React from 'react';

function AddTodo(props) {
  return (
    <>
      <div id="todo">
        <input
          ref={props.inputRef}
          type="text"
          value={props.value}
          onChange={props.handleChange}
        />
        <button onClick={props.handleAdd}>Add Todo</button>
      </div>
      <br />
      <hr />
      <br />
    </>
  );
}

export default AddTodo;
