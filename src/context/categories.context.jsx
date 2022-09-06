import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const value = { categoriesMap };

  useEffect(() => {
    async function getCategories() {
      const categories = await getCategoriesAndDocuments();
      setCategoriesMap(categories);
      console.log(categories);
    }
    getCategories();
  }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
