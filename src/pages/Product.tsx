import { useParams } from "react-router";
import { useProduct } from "../useProduct";
import { Labels } from "../design-system/Labels";
import "./Product.css";

export const Product = () => {
  const { id } = useParams<PathParams>();
  const product = useProduct(id);

  return (
    <main className="Product">
      <img src={product?.image_front_url} alt={product?.product_name} />
      <section>
        <h1>{product?.product_name}</h1>
        <Labels color="blue" items={product?._keywords ?? []} />
        <h2>Allergènes</h2>
        <Labels
          color="pink"
          items={
            product?.allergens_from_ingredients
              .replace("en:", "")
              .split(", ")
              .filter((it) => it !== "") ?? []
          }
        />
      </section>
    </main>
  );
};

type PathParams = { id: string };
