import TasksListItem from "../tasks-list-item/tasks-list-item";
import './tasks-list.css';

const TasksList = ({ data, onDelete, onEdit }) => {
  const elements = data.map(item => {
    const { id, ...itemProps } = item;
    return (
      <TasksListItem
        key={id}
        {...itemProps}
        onDelete={() => onDelete(id)}
        onEdit={() => onEdit(item)}
      />
    )
  })
  return (
    <ul className="app-list list-group">
      <li className="list-group-item d-flex justify-content-between header">
        <span className='list-item-name'>Title</span>
        <span className='list-item-description'>Description</span>
        <span className='list-item-status'>Status</span>
        <span className='list-item-date'>Created</span>
        <span className='list-item-date'>Updated</span>
        <span className='list-item-actions'></span>
      </li>
      {elements}
    </ul>
  );
}
export default TasksList;