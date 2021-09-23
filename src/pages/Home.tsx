import React, { useState } from "react";
import { TextInput } from "../design-system/TextInput";
import { useSearchResult } from "../useSearchResult";
import { BottomContainer } from "../design-system/BottomContainer";
import { ProductContainer } from "../design-system/ProductContainer";
import "./Home.css";
import { Results } from "./home/Results";
import { Loading } from "./home/Loading";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { searchResult, loading } = useSearchResult(searchTerm);
  return (
    <main className="Home">
      <ProductContainer>
        {loading ? <Loading /> : <Results searchResult={searchResult} />}
      </ProductContainer>
      <BottomContainer>
        <TextInput
          id="searchProduct"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          label="Rechercher un produit 🔎"
        />
      </BottomContainer>
    </main>
  );
};

export default App;
