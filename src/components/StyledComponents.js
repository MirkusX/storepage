import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const StyledTitleContainer = styled.div`
  background: #e63946;
  transform: skew(10deg);
  padding: 1em;
  margin: 1em;
  transition: all 0.3s ease-in-out;
  box-shadow: 3px 3px 3px black;
`;

export const ProductH1 = styled.h1`
  transform: skew(-10deg);
  color: white;
`;

export const StyledH2 = styled.h2`
  font-size: 0.7rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 40ch;
  overflow: hidden;
  margin: 0;
  transform: skew(-10deg);
  transition: all 0.3s ease-in-out;
  @media (max-width: 811px) {
    max-width: 30ch;
  }
  ${(props) => {
    if (props.privacy)
      return `
    font-size: 1rem;`;
  }}
`;

export const StyledHomeDiv = styled.div`
  width: 30%;
  background-color: white;
  border-radius: 3px;
  padding: 1em;
  margin: 1em;
  border: 3px solid #e63946;
  transition: all 0.3s ease-in-out;
  box-sizing: border-box;
  @media (max-width: 811px) {
    width: 80%;
  }
  &:hover {
    ${StyledTitleContainer} {
      transform: skew(0deg);
    }
  }
`;

export const FeaturedImg = styled.img`
  height: 11em;
  width: auto;
  border-radius: 3px;
`;

export const AddToCart = styled.button`
  border: none;
  padding: 1em;
  cursor: pointer;
  background-color: green;
  border-radius: 3px;
  font-family: inherit;
  margin: 1em;
  &:hover {
    background-color: darkgreen;
  }
  ${(props) => {
    if (props.delete)
      return `
    background: red;
    &:hover{
      background: darkred;
    }`;
  }}
`;

export const HomePageH1 = styled.h1``;

export const ErrorText = styled.h1`
  color: red;
  ${(props) => {
    if (props.hide)
      return `
  display: none;`;
  }}
`;

export const FeaturedProducts = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #a8dadc;
  @media (max-width: 811px) {
    flex-direction: column;
  }
  ${(props) => {
    if (props.product) {
      return `
      align-items: center;`;
    }
  }}
`;

export const Divider = styled.div`
  height: 3px;
  width: 80%;
  margin: 0 auto;
  background-color: white;
`;

export const StyledProductShowcase = styled.section`
  background-color: white;
  width: 100%;
  border-radius: 3px;
  ${(props) => {
    if (props.desc)
      return `
    padding: 1em 0;
    margin: 0 auto;
    background: #1D3557;
    color: white;`;
  }}
`;
export const StyledProductInner = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1em 0;
  @media (max-width: 811px) {
    flex-direction: column;
    gap: 1em;
  }
`;

export const ProductInfo = styled.div`
  width: 30%;
  text-align: center;
  padding: 1em;
  color: white;
  ${(props) => {
    if (props.info)
      return `
    border: #E63946 solid 3px;
    text-align: left;
    border-radius: 3px;
    background-color: #e63946;
    box-shadow: 3px 3px 3px black;
    `;
  }}
  ${(props) => {
    if (props.review)
      return `
    text-align: left;
    border-radius: 3px;
    box-shadow: 3px 3px 3px black;
    background: #1D3557;
    width: 90%;
    `;
  }}
  @media (max-width: 811px) {
    width: 90%;
  }
`;

export const WhiteP = styled.p`
  ${(props) => {
    if (props.margin) {
      return `
      margin: 0 1em;`;
    }
  }}
  ${(props) => {
    if (props.hidden)
      return `
    display: none;`;
  }}
`;

export const StyledProductImage = styled.img`
  width: 50%;
`;

export const NavBar = styled.div`
  display: flex;
  background: #e63946;
  justify-content: center;
  gap: 1em;
  padding: 1em 0;
  ${(props) => {
    if (props.footer)
      return `
    bottom: 0;
    margin-top: 1em;
    position: relative;
    width: 100%;
    `;
  }}
`;

export const Space = styled.div`
  margin: 5em;
`;

export const LinkTo = styled(Link)`
  text-decoration: none;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    color: black;
  }
  ${(props) => {
    if (props.category)
      return `
    padding: 1em;
    background: #457B9D;
    border: white 3px solid;
    margin: 1em;
    border-radius: 3px;
    transition: all 0.19s ease-in-out;
    color: white;
    &:hover{
      background: white;
      color: black;
    }`;
  }}
  ${(props) => {
    if (props.disabled)
      return `
    pointer-events: none;`;
  }}
  ${(props) => {
    if (props.hide)
      return `
    display: none;`;
  }}
`;

export const StyledInput = styled.input`
  padding: 1em;
  border-radius: 3px;
  ${(props) => {
    if (props.submit)
      return `
    cursor: pointer;`;
  }}
`;

export const StyledSelect = styled.select`
  padding: 1em;
  border-radius: 3px;
  margin: 0 1em;
`;

export const CartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em;
  border-radius: 3px;
  background: #457b9d;
  width: 50%;
  margin: 1em 0;
  align-items: center;
`;

export const CartSection = styled.section`
  min-height: 100vh;
  ${(props) => {
    if (props.items)
      return `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;`;
  }}
`;

export const ArticleSection = styled.section`
  width: 50%;
  margin: 0 auto;
  text-align: left;
  color: black;
  ${(props) => {
    if (props.payment) {
      return `
      text-align: center;`;
    }
  }}
`;

export const FAQLi = styled.li`
  font-weight: bold;
  ${(props) => {
    if (props.noDot)
      return `
    list-style-type: none;`;
  }}
`;

export const GreenSpan = styled.span`
  font-size: 0.3rem;
`;

export const PaymentForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: center;
`;

const LoadingAnim = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }`;

export const Loader = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${LoadingAnim} 2s linear infinite;
  margin: 1em;
  ${(props) => {
    if (props.hide)
      return `
    display: none;`;
  }}
`;
