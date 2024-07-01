import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { LiaCartPlusSolid } from "react-icons/lia";
import { add } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

function SingleProduct({ product }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleAdd = (product) => {
    toast(`Product added to cart`, {
      description: `${product.title} has been added to the cart`,
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    });
    dispatch(add({ ...product, quantity }));
    setQuantity(1);
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <div className="p-4 bg-white flex flex-col justify-between rounded-md shadow-md min-h-[200px]">
      <div>
        <div className="flex justify-center">
          <img src={product?.image} className="h-[100px] object-fill" />
        </div>
        <h3 className="mt-4 text-center font-bold text-md">{product?.title}</h3>

        <div className="mt-4 mb-4 flex items-center gap-2 justify-center">
          <div>
            <FaStar className="text-yellow-400" />
          </div>
          <div className="text-xs">
            {product.rating.rate} out of 5.00 ({product.rating.count})
          </div>
        </div>
        <div className="flex justify-center mt-4">
          Price: {`$${product?.price}`}
        </div>
      </div>

      <div className="flex justify-between mt-4 items-center">
        <div>
          <div className="relative flex items-center max-w-[8rem]">
            <button
              type="button"
              id="decrement-button"
              onClick={handleDecrement}
              className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
            >
              <svg
                className="w-3 h-3 text-gray-900 dark:text-white"
                aria-hidden="true"
                xmlns="https://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 2"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h16"
                />
              </svg>
            </button>
            <input
              type="text"
              id="quantity-input"
              value={quantity}
              readOnly
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="999"
              required
            />
            <button
              type="button"
              id="increment-button"
              onClick={handleIncrement}
              className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
            >
              <svg
                className="w-3 h-3 text-gray-900 dark:text-white"
                aria-hidden="true"
                xmlns="https://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </button>
          </div>
        </div>
        <div>
          <button
            onClick={() => handleAdd(product)}
            className="bg-gray-900 text-slate-50 p-2 flex gap-1 items-center"
          >
            <div>Add to Cart</div>
            <LiaCartPlusSolid />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
