import React, { useEffect, useContext } from "react";
import api from "../api/api";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { MenuContext } from "../context/MenuContext";

function Navigation() {
  const { setMenu } = useContext(MenuContext);

  useEffect(async () => {
    await api.get("/menu").then((res) => {
      setMenu(res.data);
    });
  }, []);
  
  return (
    <>
      <Topbar />
      <Sidebar />
    </>
  );
}

export default Navigation;
