import * as React from "react";
import "./Loading.css";

export const Loading = () => {
  return (
    <section>
      <div>Vous pouvez rechercher un produit ci-dessous 🙂</div>
      <CheapSpinner />
    </section>
  );
};

const CheapSpinner = () => (
  <div
    className="CheapSpinner"
    style={{
      fontSize: "3rem",
      display: "flex",
      justifyContent: "center",
      marginTop: "12px",
    }}
  >
    ↺
  </div>
);
