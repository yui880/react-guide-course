import "./App.css";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import { useState } from "react";
import ErrorModal from "./components/UI/ErrorModal";
function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevState) => [
      ...prevState,
      { name: uName, age: uAge, id: Math.random().toString() },
    ]);
  };

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
