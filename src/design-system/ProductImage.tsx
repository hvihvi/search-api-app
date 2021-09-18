import "./ProductImage.css";

export const ProductImage = ({ src, alt }: ProductImageProps) => {
  return (
    <div className="ProductImage">
      <img src={src} alt={alt} />
    </div>
  );
};

type ProductImageProps = {
  src: string;
  alt: string;
};
