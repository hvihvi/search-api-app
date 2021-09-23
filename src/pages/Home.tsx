import React, { useState } from "react";
import { TextInput } from "../design-system/TextInput";
import { useSearchResult } from "../useSearchResult";
import { BottomContainer } from "../design-system/BottomContainer";
import { ProductContainer } from "../design-system/ProductContainer";
import { ProductImage } from "../design-system/ProductImage";
import { EmptyContent } from "../EmptyContent";
import "./Home.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchResult = useSearchResult(searchTerm);
  return (
    <main className="Home">
      <ProductContainer>
        {searchResult?.products.map((product) => (
          <ProductImage product={product} key={product._id} />
        )) ?? <EmptyContent />}
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
