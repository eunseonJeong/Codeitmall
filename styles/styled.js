import Link from "next/link";
import { css, styled } from "styled-components";
export const StForm = styled.form`
  display: flex;
  gap: 15px;
`;

export const StInput = styled.input`
  width: 45vw;
  padding: 0px 30px;
  color: #f9f9f9;
  font-size: 18px;
  background-color: #252525;
  border: 1px solid #505050;
  border-radius: 10px;
  outline: none;
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
