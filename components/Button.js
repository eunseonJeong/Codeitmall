import styles from "./styles/Button.module.css";

export default function Button({ className = "", as, ...props }) {
  return <button className={`${styles.button} ${className}`} {...props} />;
}
