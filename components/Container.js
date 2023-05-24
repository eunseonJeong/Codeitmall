import { styled } from "styled-components";

export default function Container({ children }) {
  return <StContainer>{children}</StContainer>;
}

const StContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 950px;
`;
