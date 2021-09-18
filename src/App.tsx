import React, { useState } from "react";
import "./App.css";
import { TextInput } from "./design-system/TextInput";
import { useSearchResult } from "./useSearchResult";
import { BottomContainer } from "./design-system/BottomContainer";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchResult = useSearchResult(searchTerm);
  return (
    <div>
      {searchResult?.products
        .map((p) => p.image_front_url)
        .map((src) => (
          <img src={src} alt={"produit"} />
        ))}
      <BottomContainer>
        <TextInput
          id="searchProduct"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          label="Rechercher un produit"
        />
      </BottomContainer>
    </div>
  );
};

export default App;
