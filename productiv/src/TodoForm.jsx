import { useState } from "react";


/** Form for adding.
 *
 * Props:
 * - initialFormData
 * - handleSave: function to call in parent.
 *
 * State:
 * - formData
 *
 * { TodoApp, EditableTodo } -> TodoForm
 */
// FIXME: Not being passed initialFormData, so undefined here or default on line 60
function TodoForm({ initialFormData, handleSave }) {

  const [formData, setFormData] = useState(initialFormData);
  console.log("formData=", formData);

  /** Update form input. */
  function handleChange(evt) {
    const fieldName = evt.target.name;
    console.log("fieldName=", fieldName);
    const value = evt.target.value;
    console.log("value=", value);

    setFormData(currData => {
      currData[fieldName] = value;
      // console.log(currData[fieldName]);
      // console.log("currData=", currData);
      return { ...currData };
    });
  }

  /** Call parent function and clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    handleSave(formData);
    setFormData({ title: "", description: "" });
  }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>

      <div className="mb-3">
        <input
          name="title"
          className="form-control"
          placeholder="Title"
          onChange={handleChange}
          value={formData.title || ""}
          aria-label="Title"
        />
      </div>

      <div className="mb-3">
        <textarea
          name="description"
          className="form-control TodoForm-description"
          placeholder="Description"
          onChange={handleChange}
          value={initialFormData?.description || ""}
          aria-label="Description"
        />
      </div>

      <div className="mb-3">
        <div className="w-75 d-flex justify-content-between">
          <label htmlFor="TodoForm-priority"
            className="d-inline-flex">Priority:&nbsp;&nbsp;
          </label>
          <select id="TodoForm-priority"
            name="priority"
            value={initialFormData?.priority || ""}
            onChange={handleChange}
            className=
            "form-control form-control-sm d-inline-flex TodoForm-priority"
          >
            <option value={1}>Ultra-Über</option>
            <option value={2}>Über</option>
            <option value={3}>Meh</option>
          </select>
        </div>
        <button className="btn-primary btn btn-sm TodoForm-addBtn">
          Gø!
        </button>
      </div>

    </form>
  );
}

export default TodoForm;
