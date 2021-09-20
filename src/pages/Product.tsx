import { useParams } from "react-router";
import { useProduct } from "../useProduct";
import { Labels } from "../design-system/Labels";

export const Product = () => {
  const { id } = useParams<PathParams>();
  const product = useProduct(id);

  return (
    <main>
      <h1>{product?.product_name}</h1>
      <img src={product?.image_front_url} alt={product?.product_name} />
      <section>
        Keywords:
        <Labels color="blue" items={product?._keywords ?? []} />
      </section>
      <section>
        Allergens:
        <Labels
          color="pink"
          items={product?.allergens.replace("en:", "").split(" ") ?? []}
        />
      </section>
    </main>
  );
};

type PathParams = { id: string };
