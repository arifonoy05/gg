import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
import ResponsibilityUpdateUtil from "../utils/ResponsibilityUpdateUtil";

const columns = [
  { field: "id", headerName: "ID", width: 50, type: "number" },
  {
    field: "name",
    headerName: "Name",
    width: 300,
  },
  {
    field: "active",
    headerName: "Active",
    width: 100,
    type: "number",
  },
  {
    field: "col5",
    headerName: "Action",
    width: 150,
    headerAlign: "center",

    disableClickEventBubbling: true,
    renderCell: (cellValues) => {
      return (
        <Box sx={{ flexGrow: 1, alignContent: "center" }}>
          <Grid container>
            <Grid item>
              {/* <Link to={"/menu/update/" + cellValues.row.id}> */}
              <IconButton variant="contained" color="primary">
                <EditIcon />
              </IconButton>
              {/* </Link> */}
            </Grid>
            <Grid item>
              <IconButton
                variant="contained"
                color="error"
                // onClick={() => {
                //   handleOpenMenu(cellValues.row);
                // }}
              >
                <CloseIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
      );
    },
  },
];

const ResponsibilityUpdate = ({ content }) => {
  const { id } = useParams("id");

  const { menu } = useContext(MenuContext);
  const [menuR, setMenuR] = useState([]);

  const [resId, setResId] = useState(0);
  const [menuMap, setMenuMap] = useState({ responsibility: "", active: 0 });
  const { updateRes, setUpdateRes } = ResponsibilityUpdateUtil();

  const [resActive, setResActive] = useState(false);
  const toggleActive = (e) => {
    setResActive(e.target.checked);
    resActive
      ? setUpdateRes({ ...updateRes, [e.target.name]: 0 })
      : setUpdateRes({ ...updateRes, [e.target.name]: 1 });
  };

  const menuContent = (data) => {
    setMenuMap(data);
  };

  useEffect(() => {
    console.log(id);
    api.get("/responsibility/" + id).then((res) => {
      setUpdateRes(res.data);
      updateRes.active === 0 ? setResActive(true) : setResActive(false);
    });
    api.get("/responsibility/" + id + "/menu").then((res) => {
      const data = res.data;
      data.map((item) => {
          const t = []
          if(item==menu.id){
              t.push(menu)
          }
          console.log(t);
      });
      console.log(menuR);
    });
  }, []);

  useEffect(() => {
    console.log(updateRes);
  }, [updateRes]);

  const onChangeHandler = (e) => {
    setUpdateRes({ ...updateRes, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setUpdateRes({
      description: "",
      active: 0,
      name: "",
    });
    setResActive(false);
  };

  const formSubmitHandler = (e) => {
    api.post("/responsibility/add", updateRes).then((res) => {
      if (menuMap.responsibility !== 0) {
        menuMap.active
          ? setMenuMap({ ...menuMap, active: 1 })
          : setMenuMap({ ...menuMap, active: 0 });
        api.post("/responsibility/addMenu/" + res.data, menuMap).then((res) => {
          console.log(
            "Responsibility Added, Menu of id: " +
              menuMap.responsibility +
              " Successfully"
          );
        });
      }
      console.log("Responsibility added successfully");
    });
    console.log(updateRes, menuMap);
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
                value={updateRes.name}
                onChange={onChangeHandler}
                fullWidth
                sx={{ marginBottom: 2 }}
              />
              <TextField
                name="description"
                label="Description"
                variant="outlined"
                value={updateRes.description}
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
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            sx={{ mt: 4 }}
            rows={menuR}
            columns={columns}
            pageSize={5}
            // onRowClick={(data)=> navigate("/menu/update/"+data.id)}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
          ></DataGrid>
        </div>
      </Container>
    </Box>
  );
};

export default ResponsibilityUpdate;
