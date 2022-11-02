import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CATEGORY_DESC } from "../../../components/CategoryDesc";

import {
  AddToCart,
  FAQLi,
  ProductH1,
  ProductInfo,
  StyledH2,
  StyledProductImage,
  StyledProductInner,
  StyledProductShowcase,
  StyledTitleContainer,
  WhiteP,
} from "../../../components/StyledComponents";
import { CartContext, ProductContext } from "../../PageFiles/ProductContext";
import { PRODUCT_LIST_PAGES_TEXT_CONSTS } from "./ProductListPagesFiles/ProductListPagesTextConsts";

export const ProductPage = () => {
  const { PRODUCT_PAGE } = PRODUCT_LIST_PAGES_TEXT_CONSTS;
  const { cart, setCart } = useContext(CartContext);
  const [show, setShow] = useState(false);
  const { data } = useContext(ProductContext);
  console.log(data);
  const { id } = useParams();
  const actualId = id - 1;
  console.log(data);
  const addToCart = () => {
    setCart([
      ...cart,
      { title: data[actualId].title, price: data[actualId].price },
    ]);
    setShow(!show);
  };
  useEffect(() => {
    if (setShow(true)) {
      setShow(false);
    }
  }, [data[actualId].title]);
  if (data)
    return (
      <StyledProductShowcase>
        <StyledProductInner>
          <ProductInfo>
            <StyledTitleContainer>
              <ProductH1>{data[actualId].title}</ProductH1>
            </StyledTitleContainer>
            <StyledProductImage src={data[actualId].image} />
          </ProductInfo>
          <ProductInfo info>
            <WhiteP>{data[actualId].description}</WhiteP>
            <WhiteP>
              {PRODUCT_PAGE.REVIEW}
              {data[actualId].rating.rate}/5
            </WhiteP>
            <AddToCart onClick={() => addToCart()}>
              {PRODUCT_PAGE.ADD}
              {data[actualId].price}
            </AddToCart>
            <WhiteP hidden={show}>{PRODUCT_PAGE.ADDED}</WhiteP>
            <ProductInfo review>
              <FAQLi noDot>{PRODUCT_PAGE.FEATURED}</FAQLi>
              <WhiteP>
                {CATEGORY_DESC.reviews[`${data[actualId].title}`]}
              </WhiteP>
            </ProductInfo>
          </ProductInfo>
        </StyledProductInner>
      </StyledProductShowcase>
    );
};
