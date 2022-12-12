import {
  CartSection,
  HomePageH1,
  WhiteP,
} from "../../components/StyledComponents";
import { CATEGORY_PAGES_TEXT } from "./CategoryPageFiles/CategoryPageTextConsts";

export const CategoryTutorial = () => {
  //Shows user how to switch category
  const { CATEGORY_TUTORIAL } = CATEGORY_PAGES_TEXT;
  return (
    <CartSection>
      <HomePageH1>{CATEGORY_TUTORIAL.TITLE}</HomePageH1>
      <WhiteP>{CATEGORY_TUTORIAL.DESC}</WhiteP>
    </CartSection>
  );
};
