import React from "react";
import { useRecoilState } from "recoil";
import { todoState } from "../assets/store/atoms/todosAtom";
import Todos from "./Todos";

const TodoList = () => {
  const [todos, setTodos] = useRecoilState(todoState);
  function toggleDone(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }
  return (
    <div id="list">
      {todos.map((todo) => (
        <Todos
          key={todo.id}
          title={todo.title}
          description={todo.description}
          done={todo.done}
          toggledone={toggleDone}
          id={todo.id}
        ></Todos>
      ))}
    </div>
  );
};

export default TodoList;
