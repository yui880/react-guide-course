import TaskForm from "./TaskForm";
import Section from "../UI/Section";
import useHttp from "../../hooks/use-http";

const NewTask = (props: any) => {
  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();

  const createTask = (taskText: string, taskData: any) => {
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };
    props.onAddTask(createdTask);
  };
  const enterTaskHandler = async (taskText: string) => {
    // const createTask = (taskData: any) => {
    //   const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    //   const createdTask = { id: generatedId, text: taskText };
    //   props.onAddTask(createdTask);
    // };
    sendTaskRequest(
      {
        url: "https://react-http-b289d-default-rtdb.firebaseio.com/tasks.json",
        method: "POST",
        body: { text: taskText },
        headers: {
          "Content-Type": "application/json",
        },
      },
      createTask.bind(null, taskText),
      //createTask;
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
