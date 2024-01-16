import React from "react";
import { useState, useEffect } from "react";
import TodoList from "./TodoList";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { todoState } from "../assets/store/atoms/todosAtom";
import "./AddToDo.css"

const AddToDo = () => {
  const [todo, setTodo] = useState({
    id: 1,
    title: "",
    description: "",
    done: false,
  });

  const [todos, setTodos] = useRecoilState(todoState);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  function changeHandler(e) {
    const { name, value } = e.target;
    setTodo((prev) => ({ ...prev, [name]: value }));
  }
  function submitHandler(e) {
    e.preventDefault();
    setTodos((prev) => [...prev, todo]);
    setTodo({
      id: todo.id + 1,
      title: "",
      description: "",
      done: false,
    });
  }
  return (
    <div id="container">

      <form id="todo-form" action="submit">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={todo.title}
          onChange={changeHandler}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={todo.description}
          onChange={changeHandler}
        />
        <button onClick={submitHandler}>Add ToDo</button>
      </form>

      <TodoList />
    </div>
  );
};

export default AddToDo;
