import TaskItem from "../TaskItem";

import "./index.css";

const TaskList = ({ tasks, onToggle, onDelete }) => (
  <div className="task-list">
    {tasks.length ? (
      tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))
    ) : (
      <p>No tasks available</p>
    )}
  </div>
);

export default TaskList;
