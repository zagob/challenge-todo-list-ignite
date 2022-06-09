import styles from "./Tasks.module.scss";

import clipboardSVG from "../../assets/Clipboard.svg";
import { Task } from "../Task";
import React from "react";

interface TaskProps {
  name: string;
  checked: boolean;
}

interface TasksProps {
  dataTasks: TaskProps[];
  setTaks: React.Dispatch<React.SetStateAction<TaskProps[]>>;
}

export function Tasks({ dataTasks, setTaks }: TasksProps) {
  const numberTasksCreated = dataTasks.length;
  const filterTaskConcluid = dataTasks.filter((task) => task.checked).length;

  function handleCheckTask(name: string, check: boolean) {
    setTaks((oldTask) =>
      oldTask.map((item) =>
        item.name === name
          ? {
              ...item,
              checked: check,
            }
          : item
      )
    );
  }

  function handleDeleteTask(name: string) {
    setTaks((oldTask) => oldTask.filter((item) => item.name !== name));
  }

  return (
    <main className={styles.main}>
      <div className={styles.info}>
        <span>
          Tarefas criadas <strong>{numberTasksCreated}</strong>
        </span>
        <span>
          Concluídas{" "}
          <strong>
            {filterTaskConcluid === 0
              ? "0"
              : `${filterTaskConcluid} de ${numberTasksCreated}`}
          </strong>
        </span>
      </div>
      {numberTasksCreated === 0 ? (
        <div className={styles.emptyTask}>
          <img src={clipboardSVG} alt="clipboardSVG" />

          <div className={styles.texts}>
            <span>Você ainda não tem tarefas cadastradas</span>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        </div>
      ) : (
        <>
          {dataTasks.map((task, index) => (
            <Task
              key={index}
              name={task.name}
              checked={task.checked}
              onCheckedTask={handleCheckTask}
              onDeleteTask={handleDeleteTask}
            />
          ))}
        </>
      )}
    </main>
  );
}
