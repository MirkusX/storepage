import { useContext, useEffect, useState } from "react";
import {
  AddToCart,
  CartContainer,
  CartSection,
  ErrorText,
  HomePageH1,
  LinkTo,
  WhiteP,
} from "../../components/StyledComponents";
import { CartContext } from "../PageFiles/ProductContext";
import { Route, Routes } from "react-router-dom";
import { Payment } from "./PaymentOverallPage/Payment";
import { PaymentOverall } from "./PaymentOverall";
import { CARTPAGE_TEXT } from "./CartPageFiles/CartPageTextConsts";

export const CartBox = () => {
  const { CART } = CARTPAGE_TEXT;
  const [poor, poorCheck] = useState(true);
  const removeItem = (index) => {
    const removeList = [...cart];
    removeList.splice(index, 1);
    setCart(removeList);
  };
  const { cart, setCart } = useContext(CartContext);
  const sum = Object.values(cart).reduce((a, b) => a + b.price, 0);
  console.log(sum);
  useEffect(() => {
    if (cart.length > 0) {
      poorCheck(!poor);
    } else {
      poorCheck(poor);
    }
  }, [cart]);

  console.log(cart);
  return (
    <CartSection items>
      {cart.map((item, index) => {
        return (
          <CartContainer>
            <WhiteP key={index}>
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
      <LinkTo to="/cart/PaymentOverall" disabled={poor}>
        <AddToCart>{CART.CHECKOUT}</AddToCart>
        <ErrorText hide={!poor}>{CART.ERROR_MESSAGE}</ErrorText>
      </LinkTo>
    </CartSection>
  );
};
