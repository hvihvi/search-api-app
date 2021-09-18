import React, { useState } from "react";
import "./App.css";
import { TextInput } from "./design-system/TextInput";
import { useSearchResult } from "./useSearchResult";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchResult = useSearchResult(searchTerm);
  return (
    <div>
      <TextInput
        id="searchProduct"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
        label="Rechercher un produit"
      />
      {searchResult?.products
        .map((p) => p.image_front_url)
        .map((src) => (
          <img src={src} alt={"produit"} />
        ))}
    </div>
  );
};

export default App;
