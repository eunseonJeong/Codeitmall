// import styles from "./Container.module.css";

import { styled } from "styled-components";

// export default function Container({ className = "", page, ...props }) {
//   const classNames = `${styles.container} ${
//     page ? styles.page : ""
//   } ${className}`;
//   return <div className={classNames} {...props} />;
// }

export default function Container({ children }) {
  return <StContainer>{children}</StContainer>;
}

const StContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 950px;
`;
