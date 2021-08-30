/*

Copyright (c) 2021 Jose Figueroa

Permission is hereby granted, free of charge, to any person obtaining a copy of this 
software and associated documentation files (the "Software"), to deal in the Software without restriction,
including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial
portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT 
NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH
THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/
function App() {
  var [completedTodo_qty, completedCount] = React.useState(0);
  var [canceledTodo_qty, canceledCount] = React.useState(0);
  var [handledTodo_qty, handledCount] = React.useState(3);
  var [actionMessage, updateMessage] = React.useState("");

  function completedTodoCount() {
    completedCount((completedTodo_qty = completedTodo_qty + 1));
    //console.log(completedTodo_qty);
  }

  function canceledTodoCount() {
    canceledCount((canceledTodo_qty = canceledTodo_qty + 1));
    //console.log(canceledTodo_qty);
  }

  function handledTodoCount() {
    handledCount((handledTodo_qty = handledTodo_qty + 1));
    //console.log(handledTodo_qty);
  }

  function displayActionMessage(message) {
    updateMessage((actionMessage = message));
    //console.log(actionMessage);
  }

  const [todos, setTodos] = React.useState([
    {
      text: "Learn React",
      isCompleted: false,
    },
    {
      text: "Meet friends for lunch",
      isCompleted: false,
    },
    {
      text: "Code a ToDo app with React",
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text: text, isCompleted: false }];
    setTodos(newTodos);
    displayActionMessage("ToDo: " + text + " added to the List");
    handledTodoCount();
  };

  const completedTodo = (index) => {
    let temp = [...todos];
    let completedTodoText = temp[index].text;
    temp.splice(index, 1);
    displayActionMessage("ToDo: " + completedTodoText + " completed");
    //console.log("Task " + completedTodoText + " completed");
    completedTodoCount();
    setTodos(temp);
  };

  const removeTodo = (index) => {
    let temp = [...todos];
    let canceledTodoText = temp[index].text;
    temp.splice(index, 1);
    displayActionMessage("ToDo " + canceledTodoText + " CANCELED");
    //console.log("Task " + canceledTodoText + " CANCELED");
    canceledTodoCount();
    setTodos(temp);
  };

  return (
    <div className="app">
      <div className="flex-container">
        <div className="flex-child">
          Type inside the field to create a ToDo item, then hit ENTER.
          <TodoForm addTodo={addTodo} />
        </div>
        <div className="flex-child">
          ToDo List
          <div className="todocontainer">
            <div className="todo-list">
              {todos.map((todo, i) => (
                <Todo
                  index={i}
                  key={i}
                  todo={todo}
                  completed={completedTodo}
                  remove={removeTodo}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex-container-monitor">
        <div className="flex-child">
          <h2>ToDo Monitor</h2>
          <div className="task-container completed">
            <label>
              Completed ToDo: <span> {completedTodo_qty} </span>
            </label>
          </div>
          <div className="task-container canceled">
            <label>
              Canceled ToDo: <span> {canceledTodo_qty} </span>
            </label>
          </div>
          <div className="task-container handled">
            <label>
              Handled ToDo: <span> {handledTodo_qty} </span>
            </label>
          </div>
          <div className="task-container message">
            <label>
              <span>{actionMessage}</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
