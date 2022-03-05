import { useContext } from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { MenuContext } from "../context/MenuContext";

const drawerWidth = 240;
const Sidebar = () => {
  const { menu } = useContext(MenuContext);

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      PaperProps={{
        sx: {
          backgroundColor: "#ec1940",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {menu.map((item) => {
            if (item.active === 1 &&  item.is_SIDEBAR_MENU === 1) {
              return (
                <Link
                  key={item.id}
                  to={item.menu_URL}
                  style={{ color: "#fff" }}
                >
                  <ListItem button>
                    {item.icon_CLASS !== "" && (
                      <ListItemIcon sx={{ mr: -3, color: "#fff" }}>
                        <FontAwesomeIcon icon={item.icon_CLASS} />
                      </ListItemIcon>
                    )}

                    <ListItemText
                      primary={item.name}
                      sx={{ textTransform: "capitalize" }}
                    />
                  </ListItem>
                </Link>
              );
            }
          })}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
