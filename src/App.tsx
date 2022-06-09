import styles from "./App.module.scss";
import toast, { Toaster } from "react-hot-toast";

import { Header } from "./components/Header";
import { Input } from "./components/Input";

import { PlusCircle } from "phosphor-react";
import { Tasks } from "./components/Tasks";
import { useState } from "react";

interface TasksProps {
  name: string;
  checked: boolean;
}

function App() {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTaks] = useState<TasksProps[]>([]);

  function handleAddNewTask() {
    const existsTask = tasks.filter((task) => task.name === taskInput);

    if (taskInput.trim() === "") {
      return alert("não é possivel");
    }

    if (existsTask.length > 0) {
      setTaskInput("");
      toast.error(`Já existe uma task com o nome ${taskInput}!`)
      return
    }

    const newTask = {
      name: taskInput,
      checked: false,
    };

    setTaks((oldTasks) => [...oldTasks, newTask]);
    setTaskInput("");
    toast.success('Task criada com sucesso!')
  }

  return (
    <>
      <Toaster position="top-center" />
      <Header />

      <div className={styles.content}>
        <div className={styles.contentInput}>
          <Input
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />
          <button onClick={handleAddNewTask} disabled={taskInput.trim() === ""}>
            Criar <PlusCircle size={22} />
          </button>
        </div>

        <Tasks dataTasks={tasks} setTaks={setTaks} />
      </div>
    </>
  );
}

export default App;
