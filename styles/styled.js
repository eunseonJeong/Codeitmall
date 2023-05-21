import Link from "next/link";
import { styled } from "styled-components";
export const StForm = styled.form`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const StInput = styled.input`
  border: none;
  border-radius: 5px;

  width: 20vw;
  height: 2.5vw;
`;

export const StButton = styled.button`
  border: none;
  border-radius: 10px;
  padding: 16px;
  font-weight: 600;
  font-size: 18px;
  line-height: 10px;
  color: white;

  width: 8vw;
  height: 2.5vw;

  background-color: #4dccc6;
  background-image: linear-gradient(315deg, #4dccc6 0%, #96e4df 74%);
  line-height: 42px;
  padding: 0;
  border: none;

  border: none;
  &:hover {
    background-color: #89d8d3;
    background-image: linear-gradient(315deg, #89d8d3 0%, #03c8a8 74%);
  }
`;

export const StLink = styled(Link)`
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  color: #ffffff;
`;
