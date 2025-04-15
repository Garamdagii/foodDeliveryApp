import { ShoppingCart, User } from "lucide-react";
import Image from "next/image";

export const Header = () => {
  return (
    <div>
      <div>
        <Image />
        <h3>NomNom</h3>
        <span>Swift Delivery</span>
      </div>
      <div>
        <button></button>
        <button>
          <ShoppingCart />
        </button>
        <button>
          <User />
        </button>
      </div>
    </div>
  );
};
