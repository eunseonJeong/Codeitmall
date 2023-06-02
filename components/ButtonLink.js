import Link from "next/link";
import styles from "./styles/Button.module.css";

export default function ButtonLink({ className = "", as, ...props }) {
  return <Link className={`${styles.button} ${className}`} {...props} />;
}
