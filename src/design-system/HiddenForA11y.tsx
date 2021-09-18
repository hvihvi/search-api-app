import { FC } from "react";
import "./HiddenForA11y.css";

/**
 * If an element is not explicit for screen readers, like svg buttons, inputs with no labels...
 * Use HiddenForA11y to add visually hidden explicit text or labels.
 */
export const HiddenForA11y: FC = ({ children }) => (
  <div className="HiddenForA11y">{children}</div>
);
