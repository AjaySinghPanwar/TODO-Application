import React, { useState, useEffect } from 'react';
import AddTodo from './AddTodo';
import ShowTodo from './ShowTodo';

//For id of todos
var i = 0;

function Todo() {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);

  //For getting input
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  //For adding todo
  const handleAdd = () => {
    setTodos([...todos, { id: i++, title: value }]);
  };

  //For deleting todo
  const handleDelete = (id) => {
    const newList = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(newList);
  };

  //For editing todo
  const handleEdit = (id) => {
    const newList = [...todos];

    newList.forEach((todo) => {
      if (todo.id === id) {
        todo.title = value;
      }
    });

    setTodos(newList);
  };

  return (
    <>
      <AddTodo
        value={value}
        handleChange={handleChange}
        handleAdd={handleAdd}
      />
      <ShowTodo
        todos={todos}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default Todo;
