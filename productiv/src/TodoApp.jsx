import { useState } from "react";
import { v4 as uuid } from "uuid";
import TodoForm from "./TodoForm.jsx";
import EditableTodoList from "./EditableTodoList.jsx";
import TopTodo from "./TopTodo.jsx";

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp({ initialTodos }) {
  const [todos, setTodos] = useState(initialTodos);

  /** add a new todo to list */
  function create(todo) {
    let newTodo = { ...todo, id: `Todo-${uuid()}` };
    setTodos(todos => [...todos, newTodo]);
  }

  /** update a todo with updatedTodo */
  function update(updatedTodo) {
  }

  /** delete a todo by id */
  function remove(id) {
  }

  return (
    <main className="TodoApp">
      <div className="row">
        <div className="col-md-6">
          <h3 className="mb-3">Todos</h3>
          <EditableTodoList /> OR
          <span className="text-muted">You have no todos.</span>
        </div>

        <div className="col-md-6">
          (if no top todo, omit this whole section)
          <section className="mb-4">
            <h3>Top Todo</h3>
            <TopTodo todos={todos}/>
          </section>

          <section>
            <h3 className="mb-3">Add Nü</h3>
            FIXME
          </section>
        </div>

      </div>
    </main>
  );
}

export default TodoApp;