import { useParams } from "react-router";

export const Product = () => {
  const { id } = useParams<PathParams>();
  return <div>todo {id}</div>;
};

type PathParams = { id: string };
