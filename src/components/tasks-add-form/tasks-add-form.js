import { Component } from 'react';

import './tasks-add-form.css';

class TasksAddForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const task = this.props.task;
    task[e.target.name] = e.target.value;

    this.props.onEditModeEnabled(task);
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.props.task.name.length < 3 || this.props.task.description.length < 3) return;
    if (this.props.task.id == null) {
      this.props.onAdd(this.props.task.name, this.props.task.description, this.props.task.status);
    }
    else {
      this.props.onSubmitEdit(this.props.task.id, this.props.task);
    }
  }

  render() {
    const name = this.props.task.name;
    const description = this.props.task.description;
    return (
      <div className="app-add-form" >
        <h3>{this.props.task.id == null ? "Add new" : "Edit"} task</h3>
        <form
          className="add-form d-flex"
          onSubmit={this.onSubmit}>

          <input type="text"
            className="form-control new-post-label"
            name="name"
            value={name}
            placeholder="Title"
            onChange={this.handleChange}
          />

          <input type="text"
            className="form-control new-post-label"
            name="description"
            value={description}
            placeholder="Description"
            onChange={this.handleChange}
          />

          <select value={this.props.task.status}
            onChange={this.handleChange}
            className="form-select" name="status">
            <option value="New">New</option>
            <option value="In progress">In progress</option>
            <option value="Done">Done</option>
          </select>

          <button type="submit"
            className="btn btn-outline-light">Save</button>
        </form>
      </div>
    )
  }
}

export default TasksAddForm;