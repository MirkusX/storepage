import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import {
  FeaturedImg,
  FeaturedProducts,
  HomePageH1,
  LinkTo,
  StyledH2,
  StyledHomeDiv,
  StyledProductShowcase,
  StyledTitleContainer,
} from "../components/StyledComponents";
import { ErrorPage } from "./ErrorPage";
import { ErrorContext, ProductContext } from "./PageFiles/ProductContext";
import { PleaseWaitPage } from "./PleaseWaitPage";
import { ProductPage } from "./CategoryPages/ProductListPages/ProductPage";
import { HOMEPAGE_TEXT_CONSTS } from "./PageFiles/HomePageTextConsts";

export const HomePage = () => {
  const { data } = useContext(ProductContext);
  const { error } = useContext(ErrorContext);
  if (data) {
    return (
      <>
        <Routes>
          <Route path=":category/:title/:id" element={<ProductPage />} />
        </Routes>
        <StyledProductShowcase desc>
          <HomePageH1>{HOMEPAGE_TEXT_CONSTS.HOMEPAGE_TITLE}</HomePageH1>
        </StyledProductShowcase>
        <FeaturedProducts>
          {/* Displays items based on what rating they have */}
          {data.map((item, index) => {
            if (item.rating.rate >= 4) {
              return (
                <StyledHomeDiv key={index} id={item.id}>
                  <LinkTo
                    to={item.category + "/" + item.title + "/" + item.id}
                    onClick={() =>
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      })
                    }
                  >
                    <FeaturedImg src={item.image} />
                    <StyledTitleContainer>
                      <StyledH2>{item.title}</StyledH2>
                      <StyledH2>
                        {HOMEPAGE_TEXT_CONSTS.HOMEPAGE_CURRENCY}
                        {item.price}
                      </StyledH2>
                    </StyledTitleContainer>
                  </LinkTo>
                </StyledHomeDiv>
              );
            }
          })}
        </FeaturedProducts>
      </>
    );
  } else if (error) {
    return <ErrorPage />;
  } else {
    <PleaseWaitPage />;
  }
};
