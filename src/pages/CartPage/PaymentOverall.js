import { Route, Routes } from "react-router-dom";
import { Payment } from "./PaymentOverallPage/Payment";
import { Processing } from "./PaymentOverallPage/Processing";

export const PaymentOverall = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Payment />} />
        <Route path="/Processing" element={<Processing />} />
      </Routes>
    </>
  );
};
