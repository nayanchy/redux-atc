import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { remove } from "@/store/cartSlice";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

function HoverCartItems() {
  const items = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  return (
    <div>
      {items.length === 0 ? (
        <div>No items in the cart</div>
      ) : (
        <Table>
          <TableCaption>
            <Link to="/cart">
              <Button variant="outline">Checkout</Button>
            </Link>
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item, i) => (
              <TableRow key={i}>
                <TableCell>
                  <img src={item.image} alt="" className="w-[50px]" />
                </TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell className="text-right">
                  <MdDeleteForever
                    className="text-lg cursor-pointer hover:text-red-700"
                    onClick={() => handleRemove(item.id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}

export default HoverCartItems;
