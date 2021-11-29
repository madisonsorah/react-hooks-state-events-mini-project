import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  const taskList = tasks.map((task) => (
    <Task
      key={task.text}
      text={task.text}
      category={task.category}
      onDeleteTask={onDeleteTask}
    />
  ));
  return <div className="tasks">{taskList}</div>;
}

export default TaskList;

// First, we'll want to display all the tasks in our app. Pass down the task data
// from `App` to `TaskList`, and display each task using the `Task` component. Make
// sure to use a `key` prop!
