import React from "react";
import Products from "../../Products/Products";
import useFetch from "../../../hooks/useFetch";

export default function RelatedProducts({ productId, categoryId }) {
  const { data } = useFetch(
    `/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`
  );

  return (
    <div className="related-prod">
      <Products headingText="Realted Products" products={data} />
    </div>
  );
}
