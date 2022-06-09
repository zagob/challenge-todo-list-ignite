import { Check, Trash } from "phosphor-react";
import { useState } from "react";
import styles from "./Task.module.scss";

interface TaskProps {
  name: string;
  checked: boolean;
  onCheckedTask: (name: string, check: boolean) => void;
  onDeleteTask: (name: string) => void;
}

export function Task({ name, checked, onCheckedTask, onDeleteTask }: TaskProps) {
  function handleCheckTask() {
    onCheckedTask(name, !checked);
  }

  function handleDeleteTask() {
    onDeleteTask(name);
  }

  return (
    <div className={styles.content}>
      <div className={styles.text}>
        <button
          onClick={handleCheckTask}
          className={checked ? styles.buttonCheckTrue : styles.buttonCheckFalse}
        >
          <Check size={16} weight="bold" />
        </button>
        <span className={checked ? styles.textLine : ""}>{name}</span>
      </div>
      <Trash size={24} onClick={handleDeleteTask} />
    </div>
  );
}
