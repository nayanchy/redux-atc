import { RiShoppingBag2Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import HoverCartItems from "./HoverCartItems";

function Navbar() {
  const items = useSelector((state) => state.cart.products);
  return (
    <div className="flex justify-between bg-slate-200 p-4 shadow-sm fixed w-full z-50 h-16">
      <div>
        <Link to="/">
          <span className="font-bold">REDUX ATC</span>
        </Link>
      </div>
      <div className="flex gap-2 uppercase items-center">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>

        <HoverCard>
          <HoverCardTrigger>
            <div className="flex gap-1 items-center">
              <RiShoppingBag2Line className=" cursor-pointer" />
              <span className="bg-slate-300 px-1 text-sm rounded-xl">
                {items.length}
              </span>
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="w-full">
            <HoverCartItems />
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  );
}

export default Navbar;
