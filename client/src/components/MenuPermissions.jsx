import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Chip,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  OutlinedInput,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { MenuContext } from "../context/MenuContext";

const MenuPermissions = ({ menuContent }) => {
  const { menu } = useContext(MenuContext);

  const [selectMenu, setSelectMenu] = useState(0);
  const [menuActive, setMenuActive] = useState(false);

  const [menuData, setMenuData] = useState({
    responsibility: selectMenu,
    active: 0,
  });

  const onChangeHandler = (e) => {
    setSelectMenu(e.target.value);
  };

  const toggleActive = (e) => {
    setMenuActive(e.target.checked);
    menuActive
      ? setMenuData({ ...menuData, [e.target.name]: 0 })
      : setMenuData({ ...menuData, [e.target.name]: 1 });
  };

  useEffect(()=>{
    setMenuData({...menuData, "responsibility": selectMenu})
  },[selectMenu])

  useEffect(() => {
    menuContent(menuData)
  }, [menuData]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <Typography variant="h6">Menu Permissions</Typography>
      </Box>

      <FormGroup>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <FormControl fullWidth>
              <InputLabel>Assign Menu to Responsibility</InputLabel>
              <Select
                name="responsibility"
                label="Assign Menu to Responsibility"
                value={selectMenu}
                onChange={onChangeHandler}
              >
                <MenuItem value={0}>No Responsibility</MenuItem>
                {menu.map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <FormControlLabel
              label="Active"
              labelPlacement="start"
              control={
                <Checkbox
                  name="active"
                  checked={menuActive}
                  onChange={(e) => toggleActive(e)}
                />
              }
              sx={{ mb: 2 }}
            />
          </Grid>
        </Grid>
      </FormGroup>
    </>
  );
};

export default MenuPermissions;
