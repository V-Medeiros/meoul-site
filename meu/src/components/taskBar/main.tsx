import styles from "./style.module.css";

type TaskBarProps = {
  nome: string;

};

export function TaskBar({nome}: TaskBarProps) {
  return (
    <div className={styles.taskbar} aria-label={nome} />
  );
}
