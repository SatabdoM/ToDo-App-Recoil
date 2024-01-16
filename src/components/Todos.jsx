const Todos = ({ title, description, done, toggledone, id }) => {
  return (
    <div className="todos">
      <h3 className="todo-title">{title}</h3>
      <p className="todo-description">{description}</p>
      <input type="checkbox" checked={done} onChange={() => toggledone(id)} />
      <label>{done ? "Mark as Undone" : "Mark as Done"}</label>
    </div>
  );
};

export default Todos;
