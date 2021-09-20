import "./Label.css";
import { FC } from "react";

export const Label: FC<Props> = ({ children, color }) => {
  return (
    <span
      className="Label"
      style={{
        border: `1px solid ${color === "blue" ? "#61dafb" : "rgb(240 97 251)"}`,
        backgroundColor:
          color === "blue" ? "#aef3f638" : "rgb(237 174 246 / 22%)",
      }}
    >
      {children}
    </span>
  );
};

type Props = { color: "blue" | "pink" };
