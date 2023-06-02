import ButtonLink from "@/components/ButtonLink";
import styles from "@/styles/NotFound.module.css";

export default function NotFound() {
  return (
    <>
      <div className={styles.notFound}>
        <div className={styles.content}>찾을 수 없는 페이지입니다.</div>
        <ButtonLink className={styles.button} href="/">
          홈으로 이동
        </ButtonLink>
      </div>
    </>
  );
}
