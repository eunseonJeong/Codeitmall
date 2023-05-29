import DropDown from "@/components/DropDown";
import Page from "@/components/Page";
import { useTheme } from "@/lib/ThemeContext";
import React from "react";

export default function setting() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <h1>설정</h1>

      <section>
        <label>테마 설정</label>

        <DropDown
          name="theme"
          value={theme}
          onChange={(name, value) => setTheme(value)}
          options={[
            { label: "라이트", value: "light" },
            { label: "다크", value: "dark" },
          ]}
        />
      </section>
    </>
  );
}
