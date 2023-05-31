import { useEffect, useState, useRef } from "react";
import styled, { css } from "styled-components";

export default function Dropdown({
  className,
  name,
  value,
  options,
  onChange,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);

  function handleInputClick() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  function handleBlur() {
    setIsOpen(false);
  }

  useEffect(() => {
    function handleClickOutside(e) {
      const isInside = inputRef.current?.contains(e.target);
      if (!isInside) {
        setIsOpen(false);
      }
    }

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const classNames = `${Input.styledComponentId} ${
    isOpen ? "opened" : ""
  } ${className}`;
  const selectedOption = options.find((option) => option.value === value);

  return (
    <Input
      className={classNames}
      onClick={handleInputClick}
      onBlur={handleBlur}
      ref={inputRef}
    >
      {selectedOption.label}
      <Arrow className={isOpen ? "opened" : ""}>▲</Arrow>
      <Options className={isOpen ? "opened" : ""}>
        {options.map((option) => {
          const selected = value === option.value;
          const className = `${Option.styledComponentId} ${
            selected ? "selected" : ""
          }`;
          return (
            <Option
              className={className}
              key={option.value}
              onClick={() => onChange(name, option.value)}
            >
              {option.label}
            </Option>
          );
        })}
      </Options>
    </Input>
  );
}

const Input = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-radius: 10px;
  background: #252525;
  padding: 15px 26px;
  color: #b5b5b5;
  width: 20%;

  ${({ theme }) =>
    theme === "light" &&
    css`
      background-color: #e1e1e1;
      color: #505050;
    `}
`;

const Arrow = styled.span`
  transform: rotate(180deg);
  transition: transform 0.2s ease;

  ${Input}.opened & {
    transform: rotate(0);
  }
`;

const Options = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  left: 0;
  transform: scaleY(0);
  transform-origin: top center;
  z-index: 1;
  transition: transform 0.2s ease-in-out;
  border-radius: 10px;
  background-color: #252525;
  padding: 15px 16px;
  overflow: hidden;
  color: #b5b5b5;

  ${({ theme }) =>
    theme === "light" &&
    css`
      background-color: #e1e1e1;
      color: #505050;
    `}

  ${Input}.opened & {
    transform: scaleY(1);
  }
`;

const Option = styled.div`
  cursor: pointer;
  padding: 10px;

  ${({ selected, theme }) =>
    (selected || theme === "light") &&
    css`
      background-color: #505050;

      :hover {
        background-color: #cfcfcf;
      }
    `}
`;
