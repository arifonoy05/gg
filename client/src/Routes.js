import React from "react";
import { Route, Routes as DOMRoutes } from "react-router-dom";
import Home from "./components/Home";
import MenuForm from "./components/MenuForm";
import MenuList from "./components/MenuList";
import MenuUpdate from "./components/MenuUpdate";
import ResponsibilityUpdate from "./components/ResponibilityUpdate";
import ResponsibilityForm from "./components/ResponsibilityForm";
import ResponsibilityList from "./components/ResponsibilityList";

const Routes = () => {
  const __addMenuContent = {
    title: "Add New Menu Item",
    button: "Save",
  };
  const __updateMenuContent = {
    title: "Update Menu Item",
    button: "Update",
  };

  const __addResponsibilityContent = {
    title: "Add New Responsibility",
    button: "Save"
  }
  const __updateResponsibilityContent = {
    title: "Update Responsibility",
    button: "Update"
  }
  return (
    <DOMRoutes>
      <Route path="/" element={<Home />} />

      {/* Menu Routes */}
      <Route path="/menu" element={<MenuList />} />
      <Route path="/menu/add" element={<MenuForm content={__addMenuContent} />} />
      <Route path="/menu/update/:id" element={<MenuUpdate content={__updateMenuContent} />} />

      {/* Responsibility Routes */}
      <Route path="/responsibility" element={<ResponsibilityList />} />
      <Route path="/responsibility/add" element={<ResponsibilityForm content={__addResponsibilityContent} />} />
      <Route path="/responsibility/update/:id" element={<ResponsibilityUpdate content={__updateResponsibilityContent} />} />
    </DOMRoutes>
  );
};

export default Routes;
