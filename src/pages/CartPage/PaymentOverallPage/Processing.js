import { useContext, useEffect, useRef, useState } from "react";
import {
  ArticleSection,
  CartSection,
  HomePageH1,
  LinkTo,
  Loader,
} from "../../../components/StyledComponents";
import { CartContext } from "../../PageFiles/ProductContext";
import { PAYMENT_OVERALL } from "./PaymentOverallFiles/PaymentOverallTextConsts";

export const Processing = () => {
  const { PROCESSING } = PAYMENT_OVERALL;
  const LoadingMessages = [
    "Transferring money to tax haven",
    "Enemies die faster if you damage them",
    "Updating Windows please wait...",
    "Uploading credit card information to unencrypted notepad file",
    "Collect all Riddler trophies for the secret ending!",
    "Finding players...",
    "Verifying game server",
    "Unforseen Consequences",
    "Entering the Survival Horror",
    "[Door slowly opening]",
  ];
  const { cart, setCart } = useContext(CartContext);
  const [message, setMessage] = useState("");
  const [hide, setHide] = useState(false);
  const randomizeMessage = () => {
    setMessage(
      LoadingMessages[Math.floor(Math.random() * LoadingMessages.length)]
    );
  };

  const complete = () => {
    setMessage("Complete!");
  };

  useEffect(() => {
    const timerMessage = setInterval(() => {
      randomizeMessage();
    }, 500);
    setTimeout(() => {
      complete();
      clearInterval(timerMessage);
      setHide(!hide);
      setCart([]);
    }, 8000);
    return;
  }, []);

  console.log(message);
  return (
    <CartSection items>
      <Loader hide={hide} />
      <HomePageH1>{message}</HomePageH1>
      <LinkTo hide={!hide} to="/">
        {PROCESSING.RETURN}
      </LinkTo>
    </CartSection>
  );
};
