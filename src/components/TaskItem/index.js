import "./index.css";

const TaskItem = ({ task, onToggle, onDelete }) => (
  <div className={`task-item ${task.completed ? "completed" : ""}`}>
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span>{task.name}</span>
    </div>
    <button onClick={() => onDelete(task.id)}>Delete</button>
  </div>
);

export default TaskItem;
