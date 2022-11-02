import { Route, Routes, useParams } from "react-router-dom";
import {
  Divider,
  FeaturedProducts,
  LinkTo,
} from "../components/StyledComponents";

import { useContext } from "react";

import { ProductList } from "./CategoryPages/ProductList";
import { ProductContext } from "./PageFiles/ProductContext";
import { HomePage } from "./HomePage";
import { CategoryTutorial } from "./CategoryPages/CategoryTutorial";

export const Categories = () => {
  const { data } = useContext(ProductContext);

  const uniqueCategory = [];

  if (data) {
    const unique = data.filter((e) => {
      const duplicate = uniqueCategory.includes(e.category);
      if (!duplicate) {
        uniqueCategory.push(e.category);
      } else {
        return;
      }
    });
    return (
      <>
        <FeaturedProducts>
          {uniqueCategory.map((item, index) => {
            return (
              <>
                <LinkTo category="true" key={index} to={item}>
                  {item.toUpperCase()}
                </LinkTo>
              </>
            );
          })}
        </FeaturedProducts>
        <Routes>
          <Route exact path="*" element={<CategoryTutorial />} />
          <Route path=":category/*" element={<ProductList />} />
        </Routes>
      </>
    );
  }
};
