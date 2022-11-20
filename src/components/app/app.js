import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import AppFilter from '../app-filter/app-filter';
import TasksList from '../tasks-list/tasks-list';
import TasksAddForm from '../tasks-add-form/tasks-add-form';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "Task 1", description: 'do task1', status: 'New', creationDate: '11/15/2022', updateDate: '11/16/2022', id: 0 },
        { name: "Task 2", description: 'do task2', status: 'Done', creationDate: '11/14/2022', updateDate: '11/15/2022', id: 1 },
        { name: "Task 3", description: 'do task3', status: 'New', creationDate: '11/13/2022', updateDate: '11/17/2022', id: 2 }
      ],
      filter: '',
      sortBy: 'creationDateIncrease',
      task: { name: '', description: '', status: 'New' }
    }
    this.maxId = 3;
    this.handleEditModeEnabled = this.handleEditModeEnabled.bind(this);
  }

  handleEditModeEnabled(item) {

    item.updateDate = new Date().toLocaleDateString();

    this.setState({ task: item });
  }

  onStartEdit = (item) => this.setState({ task: item })

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  getDate = () => new Date().toLocaleDateString();

  addItem = (name, description, status) => {
    const newItem = {
      name,
      description,
      status,
      creationDate: this.getDate(),
      updateDate: this.getDate(),
      id: this.maxId++
    }
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
        task: { name: '', description: '', status: 'New' }
      }
    });
  }

  submitEditItem = (id, patch) => {
    this.setState(({ data }) => {
      return {
        task: { name: '', description: '', status: 'New' }
      }
    });
  }

  filterPost = (items, filter) => {
    if (filter) {
      return items.filter(item => item.status === filter);
    }
    return items;
  }

  onFilterSelect = (filter) => {
    this.setState({ filter });
  }

  onSortSelect = (e) => {
    const sort = e.target.value;
    this.setState({ sortBy: sort });
  }

  sortingTasksHandler = (items, sortBy) => {
    const newArr = [...items];
    newArr.sort(function (a, b) {
      switch (sortBy) {
        case 'creationDateDecrease':
          return new Date(b.creationDate) - new Date(a.creationDate);
        case 'updateDateIncrease':
          return new Date(a.updateDate) - new Date(b.updateDate);
        case 'updateDateDateDecrease':
          return new Date(b.updateDate) - new Date(a.updateDate);
        default:
          return new Date(a.creationDate) - new Date(b.creationDate);
      }
    });

    return newArr;
  }

  render() {
    const { data, filter, sortBy } = this.state;
    const tasks = this.state.data.length;

    let visibleData = this.filterPost(data, filter);
    //debugger;
    visibleData = this.sortingTasksHandler(visibleData, sortBy);

    return (
      <div className="app">
        <AppInfo tasks={tasks} />
        <div className="search-panel">
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} onSortSelect={this.onSortSelect} />
        </div>
        <TasksList
          data={visibleData}
          onDelete={this.deleteItem}
          onEdit={this.onStartEdit}
        />
        <TasksAddForm onAdd={this.addItem} onSubmitEdit={this.submitEditItem} onEditModeEnabled={this.handleEditModeEnabled} task={this.state.task} />
      </div>
    );
  }
}

export default App;