import { Component } from 'react';

import './tasks-add-form.css';

class TasksAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      status: ''
    }
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.name.length < 3 || this.state.description.length < 3) return;
    this.props.onAdd(this.state.name, this.state.description, this.state.status);
    this.setState({
      name: '',
      description: ''
    })
  }


  render() {
    const { name, description } = this.state;
    return (
      <div className="app-add-form" >
        <h3>Add new task</h3>
        <form
          className="add-form d-flex"
          onSubmit={this.onSubmit}>

          <input type="text"
            className="form-control new-post-label"
            name="name"
            value={name}
            placeholder="Title"
            onChange={this.onValueChange} />

          <input type="text"
            className="form-control new-post-label"
            name="description"
            value={description}
            placeholder="Description"
            onChange={this.onValueChange} />

          <select value={this.state.value} onChange={this.onValueChange} className="form-select" name="status">
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