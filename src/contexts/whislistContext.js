import { createContext, useContext, useEffect, useState } from "react";

const WhislistContext = createContext();

export const WhislistProvider = ({ children }) => {
  const [whislist, setwhislist] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem('whislist');
    if (data) setwhislist(JSON.parse(data));
  }, []);
 
  return (
    <WhislistContext.Provider value={{ whislist }}>
      {children}
    </WhislistContext.Provider>
  );
};
 

export const useWhislist = () => useContext(WhislistContext);
