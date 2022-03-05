import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import { Box, Toolbar } from "@mui/material";

import "./assets/styles/main.scss";

import { MenuProvider } from "./context/MenuContext";
import Navigation from "./containers/Navigation";
import Routes from "./Routes";
import { ResponsibilityProvider } from "./context/ResponsibilityContext";

library.add(far, fab, fas);

const App = () => {
  // useEffect(() => {
  //   getData();
  // }, []);

  // console.log(x);

  return (
    <MenuProvider>
      <ResponsibilityProvider>
        <Box sx={{ display: "flex" }}>
          <Navigation />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            {/* Routes and elements */}
            <Routes />
          </Box>
        </Box>
      </ResponsibilityProvider>
    </MenuProvider>
  );
};

export default App;
