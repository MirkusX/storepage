import { Route, Routes } from "react-router-dom";
import { CartBox } from "./CartPage/Cart";
import { PaymentOverall } from "./CartPage/PaymentOverall";
import { AddToCart, CartSection, LinkTo } from "../components/StyledComponents";

export const CartPage = () => {
  return (
    <CartSection>
      <Routes>
        <Route path="*" element={<CartBox />} />
        <Route path="/PaymentOverall/*" element={<PaymentOverall />} />
      </Routes>
    </CartSection>
  );
};
