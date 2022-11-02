import {
  ArticleSection,
  CartSection,
  FeaturedProducts,
  HomePageH1,
  Space,
  WhiteP,
} from "../../components/StyledComponents";
import { CATEGORY_PAGES_TEXT } from "./CategoryPageFiles/CategoryPageTextConsts";

export const CategoryTutorial = () => {
  const { CATEGORY_TUTORIAL } = CATEGORY_PAGES_TEXT;
  return (
    <CartSection>
      <HomePageH1>{CATEGORY_TUTORIAL.TITLE}</HomePageH1>
      <WhiteP>{CATEGORY_TUTORIAL.DESC}</WhiteP>
    </CartSection>
  );
};
