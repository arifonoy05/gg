import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MenuContext } from "../context/MenuContext";
import MenuUpdateUtil from "../utils/MenuUpdateUtil";
import api from "../api/api";

const MenuUpdate = ({ content }) => {
  const { id } = useParams("id");
  const { menu } = useContext(MenuContext);

  const {
    _blankMenu,
    updateMenu,
    setUpdateMenu,
    onChangeHandler,
    active,
    setActive,
    toggleActive,
    has_LINK,
    setHas_LINK,
    toggleHas_LINK,
    is_PARENT,
    setIs_PARENT,
    toggleIs_PARENT,
    is_SIDEBAR_MENU,
    setIs_SIDEBAR_MENU,
    toggleIs_SIDEBAR_MENU,
  } = MenuUpdateUtil();

  useEffect(() => {
    console.log(id);
    api.get("/menu/" + id).then((res) => {
      setUpdateMenu(res.data);
      setActive(res.data.active === 0 ? false : true);
      setHas_LINK(res.data.has_LINK === 0 ? false : true);
      setIs_SIDEBAR_MENU(res.data.is_SIDEBAR_MENU === 0 ? false : true);
      setIs_PARENT(res.data.is_PARENT === 0 ? false : true);
    });
  }, []);

  const formSubmitHandler = (e) => {
    api.put("/menu/update/" + id, updateMenu).then((res) => res.data);
    setUpdateMenu(_blankMenu);
  };

  return (
    <Box component="form">
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <Typography variant="h4" sx={{ mb: 2 }}>
            {content.title}
          </Typography>

          <Link to="/menu" style={{ textDecoration: "none" }}>
            <Button variant="contained">
              <ArrowBackIosIcon sx={{ fontSize: "medium" }} />
              Cancel
            </Button>
          </Link>
        </Box>

        <FormGroup>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                name="name"
                label="Name"
                variant="outlined"
                value={updateMenu.name}
                fullWidth
                onChange={onChangeHandler}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                name="menu_URL"
                label="URL"
                variant="outlined"
                value={updateMenu.menu_URL}
                fullWidth
                onChange={onChangeHandler}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                name="description"
                label="Description"
                variant="outlined"
                value={updateMenu.description}
                fullWidth
                onChange={onChangeHandler}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="Icon Class"
                variant="outlined"
                name="icon_CLASS"
                value={updateMenu.icon_CLASS}
                fullWidth
                onChange={onChangeHandler}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <FormControl fullWidth>
                <InputLabel>Parent</InputLabel>
                <Select
                  name="parent_ID"
                  label="Parent"
                  value={updateMenu.parent_ID}
                  onChange={onChangeHandler}
                >
                  <MenuItem value={0}>No Parent</MenuItem>
                  {menu.map((item) => {
                    if (item.id == id) {
                      return ;
                    } else {
                      return (
                        item.is_PARENT==1 && <MenuItem key={item.id} value={item.id}>
                          {item.name}
                        </MenuItem>
                      );
                    }
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="API Parent"
                variant="outlined"
                fullWidth
                name="api_PARENT"
                disabled
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FormControlLabel
                label="Is Parent"
                labelPlacement="start"
                control={
                  <Checkbox
                    name="is_PARENT"
                    checked={is_PARENT}
                    onChange={(e) => toggleIs_PARENT(e)}
                  />
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FormControlLabel
                label="Sidebar Menu"
                labelPlacement="start"
                control={
                  <Checkbox
                    name="is_SIDEBAR_MENU"
                    checked={is_SIDEBAR_MENU}
                    onChange={(e) => toggleIs_SIDEBAR_MENU(e)}
                  />
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FormControlLabel
                label="Active"
                labelPlacement="start"
                control={
                  <Checkbox
                    name="active"
                    checked={active}
                    onChange={(e) => toggleActive(e)}
                  />
                }
              />
            </Grid>
            {/* <Grid item xs={12} sm={6} md={4}>
                  <FormControl fullWidth>
                    <InputLabel>Priority</InputLabel>
                    <Select name="priority" label="Priority">
                      <MenuItem value="0">No Priority</MenuItem>
                      {menu.map((item) => (
                        <MenuItem key={item.id} value={item.id}>
                          {item.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid> */}
            <Grid item xs={12} sm={6} md={4}>
              <Link to="/menu">
                <Button
                  type="button"
                  variant="contained"
                  onClick={formSubmitHandler}
                >
                  {content.button}
                </Button>
              </Link>
            </Grid>
          </Grid>
        </FormGroup>
      </Container>
    </Box>
  );
};

export default MenuUpdate;
