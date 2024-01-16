const Todos = ({ title, description, done, toggledone, id }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <input type="checkbox" checked={done} onChange={() => toggledone(id)} />
      <label>{done ? "Mark as Undone" : "Mark as Done"}</label>
    </div>
  );
};

export default Todos;
