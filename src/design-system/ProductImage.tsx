import "./ProductImage.css";
import { Product } from "../http";
import { Link } from "react-router-dom";

export const ProductImage = ({ product }: ProductImageProps) => {
  return (
    <div className="ProductImage">
      <Link to={`/${product._id}`}>{product.product_name}</Link>
      <Link to={`/${product._id}`}>
        <img src={product.image_front_url} alt={product.product_name} />
      </Link>
    </div>
  );
};

type ProductImageProps = {
  product: Product;
};
