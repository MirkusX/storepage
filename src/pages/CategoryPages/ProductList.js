import { useContext } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { CATEGORY_DESC } from "../../components/CategoryDesc";
import {
  FeaturedImg,
  FeaturedProducts,
  LinkTo,
  Space,
  StyledH2,
  StyledHomeDiv,
  StyledProductShowcase,
  StyledTitleContainer,
  WhiteP,
} from "../../components/StyledComponents";
import { ProductContext } from "../PageFiles/ProductContext";
import { ProductPage } from "./ProductListPages/ProductPage";

export const ProductList = () => {
  const { data } = useContext(ProductContext);
  const { category } = useParams();

  if (data) {
    return (
      <>
        <StyledProductShowcase desc>
          <h1>{category.toUpperCase()}</h1>
          <WhiteP margin>{CATEGORY_DESC[`${category}`]}</WhiteP>
        </StyledProductShowcase>
        <FeaturedProducts product>
          <Routes>
            <Route path=":category/:title/:id" element={<ProductPage />} />
          </Routes>
          {data.map((item, index) => {
            if (item.category == category)
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
                      <StyledH2>£{item.price}</StyledH2>
                    </StyledTitleContainer>
                  </LinkTo>
                </StyledHomeDiv>
              );
          })}
        </FeaturedProducts>
      </>
    );
  }
};
