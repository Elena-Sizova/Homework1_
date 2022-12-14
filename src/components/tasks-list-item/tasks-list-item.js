import "./tasks-list-item.css";

const TasksListItem = (props) => {

  const {name, description, status, creationDate, updateDate, onEdit, onDelete } = props;

  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className='list-item-name'>{name}</span>
      <span className='list-item-description'>{description}</span>
      <span className='list-item-status'>{status}</span>
      <span className='list-item-date'>{creationDate}</span>
      <span className='list-item-date'>{updateDate}</span>
      <div className="d-flex justify-content-center align-items-center">
        <button type="button"
          className="btn-edit btn-sm"
          onClick={onEdit} >            
          <i className="fa-solid fa-pen-to-square"></i>
        </button>

        <button type="button"
          className="btn-trash btn-sm"
          onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>

      </div>
    </li>
  )
}

export default TasksListItem;