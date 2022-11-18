import './app-info.css';

const AppInfo = ({ tasks }) => {
  return (
    <div className="app-info">
      <h1>Tasks</h1>
      <h2>General quantity of tasks: {tasks}</h2>
    </div>
  );
}

export default AppInfo;