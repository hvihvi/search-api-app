import "./ProductImage.css";
import { Product } from "../http";

export const ProductImage = ({ product }: ProductImageProps) => {
  return (
    <div className="ProductImage">
      <img src={product.image_front_url} alt={product.product_name} />
    </div>
  );
};

type ProductImageProps = {
  product: Product;
};
