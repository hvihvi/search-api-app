import { useParams } from "react-router";
import { useProduct } from "../useProduct";

export const Product = () => {
  const { id } = useParams<PathParams>();
  const product = useProduct(id);
  return (
    <main>
      <h1>{product?.product_name}</h1>todo {JSON.stringify(product)}
    </main>
  );
};

type PathParams = { id: string };
