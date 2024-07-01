import { useEffect } from "react";
import SingleProduct from "./SingleProduct";
import { STATUSES, fetchProducts } from "@/store/productSlice";
import { useDispatch, useSelector } from "react-redux";
import StatusLoading from "./StatusLoading";
import ErrorPage from "./ErrorPage";

function Products() {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      {status === STATUSES.LOADING ? (
        <div className="grid sm:grid-cols-4 gap-10 mt-10">
          <StatusLoading />
        </div>
      ) : status === STATUSES.ERROR ? (
        <ErrorPage />
      ) : (
        <div className="grid sm:grid-cols-4 gap-10 mt-10">
          {products &&
            products.map((product) => {
              return <SingleProduct key={product.id} product={product} />;
            })}
        </div>
      )}
    </>
  );
}

export default Products;
