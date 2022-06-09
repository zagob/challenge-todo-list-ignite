import { InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...rest }: InputProps) {
  return (
    <input
      className={styles.input}
      placeholder="Adicione uma nova tarefa"
      {...rest}
    />
  );
}
