import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  IconButton,
  Grid,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import MenuPermissions from "./MenuPermissions";
import { MenuContext } from "../context/MenuContext";
import ResponsibilityFormUtil from "../utils/ResponsibilityFormUtil";
import { ResponsibilityContext } from "../context/ResponsibilityContext";
import api from "../api/api";

const ResponsibilityForm = ({ content }) => {
  const { menu } = useContext(MenuContext);
  const [resId, setResId] = useState(0);
  const [menuMap, setMenuMap] = useState({ responsibility: "", active: 0 });
  const { newRes, setNewRes } = ResponsibilityFormUtil();

  const [resActive, setResActive] = useState(false);

  const toggleActive = (e) => {
    setResActive(e.target.checked);
    resActive
      ? setNewRes({ ...newRes, [e.target.name]: 0 })
      : setNewRes({ ...newRes, [e.target.name]: 1 });
  };

  const menuContent = (data) => {
    setMenuMap(data);
  };

  useEffect(()=>{
    // console.log(menuMap);
  }, [menuMap])

  const onChangeHandler = (e) => {
    setNewRes({ ...newRes, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setNewRes({
      description: "",
      active: 0,
      name: "",
    });
    setResActive(false);
  };

  const formSubmitHandler = (e) => {
    api.post("/responsibility/add", newRes).then((res) => {
      if(menuMap.responsibility!==0){
        menuMap.active?(setMenuMap({...menuMap, "active":1})) : (setMenuMap({...menuMap, "active":0}))
        api.post("/responsibility/addMenu/"+res.data, menuMap)
         .then((res)=>{
        console.log(res.data);
      })
      }
      console.log("Responsibility added successfully");
    })
    console.log(newRes, menuMap);
    resetForm();
  };
  return (
    <Box component="form" id="responsibilityForm">
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

          <Link to="/responsibility" style={{ textDecoration: "none" }}>
            <Button variant="contained">
              <ArrowBackIosIcon sx={{ fontSize: "medium" }} />
              Back
            </Button>
          </Link>
        </Box>

        <FormGroup>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                name="name"
                label="Name"
                variant="outlined"
                value={newRes.name}
                onChange={onChangeHandler}
                fullWidth
                sx={{ marginBottom: 2 }}
              />
              <TextField
                name="description"
                label="Description"
                variant="outlined"
                value={newRes.description}
                onChange={onChangeHandler}
                fullWidth
                sx={{ marginBottom: 2 }}
              />
              <FormControlLabel
                label="Active"
                labelPlacement="start"
                control={
                  <Checkbox
                    name="active"
                    checked={resActive}
                    onChange={(e) => toggleActive(e)}
                  />
                }
                sx={{ marginBottom: 2 }}
              />
            </Grid>
          </Grid>
        </FormGroup>
        <Toolbar variant="dense" />
        <MenuPermissions menuContent={menuContent} />
        <Grid item xs={12} sm={6} md={6}>
          <Button
            type="button"
            variant="contained"
            onClick={formSubmitHandler}
            sx={{ mt: 2 }}
          >
            ADD
          </Button>
        </Grid>
      </Container>
    </Box>
  );
};

export default ResponsibilityForm;
