import { useContext, useEffect, useState } from "react";
import {
  AddToCart,
  CartContainer,
  CartSection,
  ErrorText,
  LinkTo,
  WhiteP,
} from "../../components/StyledComponents";
import { CartContext } from "../PageFiles/ProductContext";
import { CARTPAGE_TEXT } from "./CartPageFiles/CartPageTextConsts";

export const CartBox = () => {
  const { CART } = CARTPAGE_TEXT;
  const [poor, poorCheck] = useState(true);
  //Function for removing items from cart
  const removeItem = (index) => {
    const removeList = [...cart];
    removeList.splice(index, 1);
    setCart(removeList);
  };
  const { cart, setCart } = useContext(CartContext);
  //Sums price of every item in cart then adds it all together
  const sum = Object.values(cart).reduce((a, b) => a + b.price, 0);
  //Checks if cart is empty
  <CartSection items>
    {/* Displays items in cart array */}
    {cart.map((item, index) => {
      return (
        <CartContainer key={index}>
          <WhiteP>
            {item.title} | £{item.price}
          </WhiteP>
          <AddToCart delete onClick={() => removeItem(index)}>
            {CART.CLEAR}
          </AddToCart>
        </CartContainer>
      );
    })}
    <WhiteP>
      {CART.SUM}
      {sum}
    </WhiteP>
    <LinkTo to="/cart/PaymentOverall">
      <AddToCart>{CART.CHECKOUT}</AddToCart>
    </LinkTo>
  </CartSection>;
};
