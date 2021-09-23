import { ProductImage } from "../../design-system/ProductImage";
import React from "react";
import { IdleContent } from "./IdleContent";
import { SearchApiResponse } from "../../http";
import { EmptyResult } from "./EmptyResult";

export const Results = ({ searchResult }: Props) => {
  return searchResult?.products.length === 0 ? (
    <EmptyResult />
  ) : (
    <>
      {searchResult?.products.map((product) => (
        <ProductImage product={product} key={product._id} />
      )) ?? <IdleContent />}
    </>
  );
};

type Props = {
  searchResult?: SearchApiResponse;
};
