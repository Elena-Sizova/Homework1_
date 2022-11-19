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
      <label>Sort by</label>
        <select className="sort-date form-select">
          <option value="Creation date increase">Creation date increase</option>
          <option value="Сreation date decrease">Сreation date decrease</option>
        </select>
    </div>
  );
}

export default AppFilter;