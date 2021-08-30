function Todo({ todo, index, completed, remove }) {
  function handleCompleted() {
    completed(index);
  }
  function handleRemove() {
    remove(index);
  }

  return (
    <div className="todo">
      {todo.text}
      <div className="control_container">
        <button
          type="button"
          className="button completed"
          onClick={handleCompleted}
        >
          Completed
        </button>
        <button
          type="button"
          className="button canceled"
          onClick={handleRemove}
        >
          Canceled
        </button>
      </div>
    </div>
  );
}
