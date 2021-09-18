import "./ProductContainer.css";
import { FC } from "react";

export const ProductContainer: FC = ({ children }) => {
  return <section className="ProductContainer">{children}</section>;
};
