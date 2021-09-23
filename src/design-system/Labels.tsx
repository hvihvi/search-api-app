import "./Labels.css";
import { Label } from "./Label";

export const Labels = ({ items, color }: LabelsProps) => {
  return (
    <ul className="Labels">
      {items.length === 0 && (
        <li>
          <Label color={color}>Aucun</Label>
        </li>
      )}
      {items.map((item, idx) => (
        <li key={item + idx}>
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
