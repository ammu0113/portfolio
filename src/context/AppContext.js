import { createContext, useState } from "react";
import mydata from "../helper/data.json";
const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(mydata);

  return (
    <AppContext.Provider value={{ loading, setLoading, data }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppContext;
