import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-pannel/search-panel';
import AppFilter from '../app-filter/app-filter';
import TasksList from '../tasks-list/tasks-list';
import TasksAddForm from '../tasks-add-form/tasks-add-form';
import './app.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "Task 1", description: 'do task1', status: 'New', creationDate: '11/15/2022', updateDate: '11/16/2022', rise: true, id: 0 },
        { name: "Task 2", description: 'do task2', status: 'Done', creationDate: '11/14/2022', updateDate: '11/15/2022', rise: false, id: 1 },
        { name: "Task 3", description: 'do task3', status: 'New', creationDate: '11/13/2022', updateDate: '11/17/2022', rise: false, id: 2 },
        { name: "Task 2", description: 'do task2', status: 'Done', creationDate: '11/14/2022', updateDate: '11/15/2022', rise: false, id: 3 },
        { name: "Task 3", description: 'do task3', status: 'In progress', creationDate: '11/13/2022', updateDate: '11/17/2022', rise: false, id: 4 }
      ],
      term: '',
      filter: ''
    }
    this.maxId = 3;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  getDate = () => {
    const date = new Date();
    return [date.getMonth(), date.getDay(), date.getFullYear()].join('/');
  }

  addItem = (name, description, status) => {
    const newItem = {
      name,
      description,
      status,
      creationDate: this.getDate(),
      updateDate: this.getDate(),
      rise: false,
      id: this.maxId++
    }
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    });
  }

  // editItem = (id) => {
  //   this.setState(({ data }) => ({
  //     data: data.map(item => {
  //       if (item.id === id) {
  //         return { ...item, increase: !item.increase }
  //       }
  //       return item;
  //     })
  //   }))
  // }

  // onToggleRise = (id) => {
  //   this.setState(({ data }) => ({
  //     data: data.map(item => {
  //       if (item.id === id) {
  //         return { ...item, rise: !item.rise }
  //       }
  //       return item;
  //     })
  //   }))
  // }

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter(item => {
      return item.name.indexOf(term) > -1;
    })
  }

  onUpdateSearch = (term) => {
    this.setState({ term });
  }

  filterPost = (items, filter) => {
    console.log('filter', filter);

    if (filter) {
      return items.filter(item => item.status === filter);
    }
    return items;

  }

  onFilterSelect = (filter) => {
    this.setState({ filter });
    console.log(filter);
  }

  render() {
    const { data, term, filter } = this.state;
    const tasks = this.state.data.length;


    //const increased = this.state.data.filter(item => item.increase).length;

    const visibleData = this.filterPost(this.searchEmp(data, term), filter);
    return (
      <div className="app">
        <AppInfo tasks={tasks} />


        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>
        <TasksList
          data={visibleData}
          onDelete={this.deleteItem}
          // EditItem={this.EditItem}
          onToggleRise={this.onToggleRise} />
        <TasksAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;