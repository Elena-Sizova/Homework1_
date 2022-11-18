
import "./tasks-list-item.css";

const TasksListItem = (props) => {

  const { name, description, onDelete, onToggleRise, status, creationDate, updateDate, rise } = props;

  let classNames = "list-group-item d-flex justify-content-between";
  if (status === 'Done') {
    classNames += " increase";
  }
  if (rise) {
    classNames += ' like';
  }
  return (
    <li className={classNames}>
      <span className = 'list-item-name' onClick={onToggleRise}>{name}</span>
      <input type="text" className="list-group-item-input" defaultValue={description} />
      <span  className = 'list-item-status'>{status}</span>
      <span className = 'list-item-date'>{creationDate}</span>
      <span className = 'list-item-date'>{updateDate}</span>
      <div className="d-flex justify-content-center align-items-center">
        <button type="button"
          className="btn-edit btn-sm" >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>

        <button type="button"
          className="btn-trash btn-sm"
          onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>

        {/* <i className="fas fa-star"></i> */}
      </div>
    </li>
  )

}

export default TasksListItem;