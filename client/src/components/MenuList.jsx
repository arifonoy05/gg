import React, { useState, useContext, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useNavigate } from "react-router-dom";

import { MenuContext } from "../context/MenuContext";
import api from "../api/api";

const MenuList = () => {
  const navigate = useNavigate();
  const { menu, setMenu } = useContext(MenuContext);
  const [toDelete, setToDelete] = useState(0);
  const columns = [
    { field: "id", headerName: "ID", width: 50, type: "number" },
    {
      field: "name",
      headerName: "Name",
      width: 100,
    },
    {
      field: "menu_URL",
      headerName: "Menu URL",
      width: 100,
    },
    {
      field: "description",
      headerName: "Description",
      width: 150,
    },
    {
      field: "icon_CLASS",
      headerName: "Icon",
      width: 110,
    },
    {
      field: "is_PARENT",
      headerName: "Parent",
      description: "Check if this is a parent element",
      width: 80,
      type: "number",
    },
    {
      field: "parent_ID",
      headerName: "Parent ID",
      description: "Parent Element ID",
      width: 100,
      type: "number",
    },
    {
      field: "active",
      headerName: "Active",
      width: 100,
      type: "number",
    },
    {
      field: "is_SIDEBAR_MENU",
      headerName: "is_SIDEBAR_MENU",
      width: 100,
      type: "number",
    },
    {
      field: "col5",
      headerName: "Action",
      width: 120,
      disableClickEventBubbling: true,
      renderCell: (cellValues) => {
        return (
          <Box sx={{ flexGrow: 1 }}>
            <Grid container>
              <Grid item>
                <Link to={"/menu/update/" + cellValues.row.id}>
                  <IconButton variant="contained" color="primary">
                    <EditIcon />
                  </IconButton>
                </Link>
              </Grid>
              <Grid item>
                <IconButton
                  variant="contained"
                  color="error"
                  onClick={() => {
                    handleOpenMenu(cellValues.row);
                  }}
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

  const [openMenu, setOpenMenu] = useState(false);

  useEffect( async() => {
    const data = await api.get("/menu").then((res) => res.data);
    setMenu(data)
  }, [menu])

  const handleOpenMenu = (row) => {
    setToDelete(row.id);
    setOpenMenu(true);
  };
  const handleCloseMenu = () => {
    setToDelete(0);
    setOpenMenu(false);
  };

  const deleteButtonHandler = () => {
    api.delete("/menu/delete/" + toDelete).then((res) => res.data);
    setToDelete(0);
    setOpenMenu(false);
  };

  useEffect(async () => {
    await api.get("/menu").then((res) => {
      setMenu(res.data);
    });
  }, [toDelete]);

  return (
    <Box className="menu">
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <Typography variant="h4">Menu List</Typography>
          <Link to="/menu/add" style={{ textDecoration: "none" }}>
            <Button variant="contained">Add menu</Button>
          </Link>
        </Box>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={menu}
            columns={columns}
            pageSize={5}
            // onRowClick={(data)=> navigate("/menu/update/"+data.id)}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
          ></DataGrid>
        </div>

        <Modal id="menuForm" open={openMenu} onClose={handleCloseMenu}>
          <Box
            component="div"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              Are you sure you want to delete this menu item?
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={6}>
                <Button
                  variant="contained"
                  color="error"
                  fullWidth
                  onClick={deleteButtonHandler}
                >
                  Delete
                </Button>
              </Grid>
              <Grid item xs={6} sm={6}>
                <Button variant="contained" fullWidth onClick={handleCloseMenu}>
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Modal>
      </Container>
    </Box>
  );
};

export default MenuList;
