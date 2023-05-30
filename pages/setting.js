import DropDown from "@/components/DropDown";
import { useTheme } from "@/lib/ThemeContext";
import React from "react";
import { styled } from "styled-components";

export default function Setting() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <StTitle>설정</StTitle>

      <StSection>
        <StSectionTitle>테마 설정</StSectionTitle>

        <DropDown
          name="theme"
          value={theme}
          onChange={(name, value) => setTheme(value)}
          options={[
            { label: "라이트", value: "light" },
            { label: "다크", value: "dark" },
          ]}
        />
      </StSection>
    </div>
  );
}

const StTitle = styled.h1`
  margin: 30px 0;
  font-weight: 700;
  font-size: 26px;
  line-height: 38px;
`;

const StSection = styled.section`
  border-top: 1px solid #1f1f1f;

  /* .light 클래스를 가진 상위 요소에 대한 스타일 */
  ${({ theme }) =>
    theme === "light" &&
    css`
      border-top: 1px solid #e1e1e1;
    `}
`;

const StSectionTitle = styled.h2`
  margin: 35px 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
`;
