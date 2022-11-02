import "./App.css";
import { useState } from "react";
import {
  CartContext,
  ProductContext,
  ErrorContext,
} from "./pages/PageFiles/ProductContext";
import axios from "axios";
import { useEffect } from "react";
import { HomePage } from "./pages/HomePage";
import { LinkTo, NavBar, Space } from "./components/StyledComponents";
import { Route, Routes } from "react-router-dom";
import { Categories } from "./pages/Categories";
import { Gimmie } from "./pages/Gimmie";
import { CartPage } from "./pages/CartPage";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { Helmet } from "react-helmet";

function App() {
  const [error, setError] = useState();
  const [data, setData] = useState("");
  const [cart, setCart] = useState([]);
  const getData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setData(response.data);
      })
      .catch((response) => {
        setError(response);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <ErrorContext.Provider value={{ error, setError }}>
      <ProductContext.Provider value={{ data, setData }}>
        <CartContext.Provider value={{ cart, setCart }}>
          <div className="App">
            <Helmet>
              <title>Fake Store API</title>
            </Helmet>
            <NavBar>
              <LinkTo to="*">Home</LinkTo>
              <LinkTo to="/Categories">Categories</LinkTo>
              <LinkTo to="/Cart">Cart</LinkTo>
            </NavBar>
            <Routes>
              <Route exact path="*" element={<HomePage />} />
              <Route path="/Categories/*" element={<Categories />} />
              <Route path="/Cart/*" element={<CartPage />} />
              <Route path="/gimmie" element={<Gimmie />} />
              <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            </Routes>
            <Space />
            <NavBar footer>
              <LinkTo to="/gimmie">FAQ</LinkTo>
              <LinkTo to="/privacypolicy">Privacy Policy</LinkTo>
            </NavBar>
          </div>
        </CartContext.Provider>
      </ProductContext.Provider>
    </ErrorContext.Provider>
  );
}

export default App;
