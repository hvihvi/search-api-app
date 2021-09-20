import "./Labels.css";
import { Label } from "./Label";

export const Labels = ({ items, color }: LabelsProps) => {
  return (
    <ul className="Labels">
      {items.map((item) => (
        <li key={item}>
          <Label color={color}>{item}</Label>
        </li>
      ))}
    </ul>
  );
};

type LabelsProps = {
  items: string[];
  color: "pink" | "blue";
};
