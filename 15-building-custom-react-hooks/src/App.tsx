import React, { useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./hooks/use-http";

export type TaskType = {
  id: string;
  text: string;
};

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    const transformTasks = (tasksObj: any) => {
      const loadedTasks = [];
      for (const taskKey in tasksObj) {
        loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
      }
      setTasks(loadedTasks);
    };

    fetchTasks(
      {
        url: "https://react-http-b289d-default-rtdb.firebaseio.com/tasks.json",
      },
      transformTasks,
    );
  }, [fetchTasks]);

  console.log(tasks);
  const taskAddHandler = (task: TaskType) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
