

import './app-filter.css';

const AppFilter = (props) => {
  const buttonsData = [
    { name: '', label: 'All tasks' },
    { name: 'Done', label: 'Done' },
    { name: 'In progress', label: 'In progress' },
    { name: 'New', label: 'New' }
  ];

  const buttons = buttonsData.map(({ name, label }) => {
    const active = props.filter === name;
    const clazz = active ? 'btn-light' : 'btn-outline-light';
    return (
      <button
        className={`btn ${clazz}`}
        type="button"
        key={name}
        onClick={() => props.onFilterSelect(name)}>
        {label}
      </button>
    )
  })

  return (
    <div className="btn-group">
      {buttons}
    </div>
  );
}

export default AppFilter;