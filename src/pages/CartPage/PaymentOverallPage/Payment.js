import { useNavigate } from "react-router-dom";
import {
  ArticleSection,
  HomePageH1,
  LinkTo,
  PaymentForm,
  StyledInput,
  StyledSelect,
  WhiteP,
} from "../../../components/StyledComponents";
import { PAYMENT_OVERALL } from "./PaymentOverallFiles/PaymentOverallTextConsts";

export const Payment = () => {
  const { PAYMENT } = PAYMENT_OVERALL;
  const { MMYY } = PAYMENT_OVERALL.PAYMENT;
  const navigate = useNavigate();
  //Navigates to processing without using link so submit can check if all fields are valid
  const proceed = () => {
    navigate("/cart/PaymentOverall/Processing");
  };
  return (
    <ArticleSection payment>
      <HomePageH1>{PAYMENT.TITLE}</HomePageH1>
      <WhiteP>{PAYMENT.PARAGRAPH}</WhiteP>
      <PaymentForm onSubmit={proceed}>
        <label htmlFor="address">{PAYMENT.ADDRESS}</label>
        <StyledInput htmlFor="address" placeholder="address" required />
        <label htmlFor="email">{PAYMENT.EMAIL}</label>
        <StyledInput
          htmlFor="email"
          placeholder="email"
          required
          type="email"
        />
        <label htmlFor="card-information">{PAYMENT.CARD}</label>
        <StyledInput
          htmlFor="card-information"
          placeholder="number"
          required
          type="text"
          maxLength={16}
        />
        <label htmlFor="CVC">{PAYMENT.CVC}</label>
        <StyledInput
          htmlFor="CVC"
          placeholder="CVC"
          required
          type="text"
          maxLength={3}
        />
        <label htmlFor="date">{MMYY.MMYY_TITLE}</label>
        <div>
          <StyledSelect htmlFor="date" required>
            <option>{MMYY.MONTH_1}</option>
            <option>{MMYY.MONTH_2}</option>
            <option>{MMYY.MONTH_3}</option>
            <option>{MMYY.MONTH_4}</option>
            <option>{MMYY.MONTH_5}</option>
            <option>{MMYY.MONTH_6}</option>
            <option>{MMYY.MONTH_7}</option>
            <option>{MMYY.MONTH_8}</option>
            <option>{MMYY.MONTH_9}</option>
            <option>{MMYY.MONTH_10}</option>
            <option>{MMYY.MONTH_11}</option>
            <option>{MMYY.MONTH_12}</option>
          </StyledSelect>
          <StyledSelect htmlFor="date" required>
            <option>{MMYY.YEAR_1}</option>
            <option>{MMYY.YEAR_2}</option>
            <option>{MMYY.YEAR_3}</option>
            <option>{MMYY.YEAR_4}</option>
            <option>{MMYY.YEAR_5}</option>
            <option>{MMYY.YEAR_6}</option>
            <option>{MMYY.YEAR_7}</option>
            <option>{MMYY.YEAR_8}</option>
            <option>{MMYY.YEAR_9}</option>
            <option>{MMYY.YEAR_10}</option>
            <option>{MMYY.YEAR_11}</option>
            <option>{MMYY.YEAR_12}</option>
          </StyledSelect>
        </div>
        <StyledInput submit type="submit" />
      </PaymentForm>
    </ArticleSection>
  );
};
