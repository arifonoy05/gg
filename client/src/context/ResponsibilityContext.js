import axios from "axios";
import React, { useState, useEffect, createContext } from "react";

export const ResponsibilityContext = createContext();

export const ResponsibilityProvider = (props) => {
  const [responsibility, setResponsibility] = useState([]);

  useEffect( async () => {
    await axios.get("http://localhost:8080/api/responsibility").then((res) => {
      const data = res.data;
      setResponsibility(data);
    });
  }, []);

  return (
      <ResponsibilityContext.Provider value={[responsibility, setResponsibility]}>
          {props.children}
      </ResponsibilityContext.Provider>
  );
};
