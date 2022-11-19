import TasksListItem from "../tasks-list-item/tasks-list-item";
import './tasks-list.css';

const TasksList = ({ data, onDelete, editItem }) => {
  const elements = data.map(item => {
    const { id, ...itemProps } = item;
    return (
      <TasksListItem
        key={id}
        {...itemProps}
        onDelete={() => onDelete(id)}
        // editItem={() => editItem(id)}
         />
    )
  })
  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  );
}
export default TasksList;