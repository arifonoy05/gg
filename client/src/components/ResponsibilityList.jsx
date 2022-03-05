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
import { DataGrid } from "@mui/x-data-grid";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import { MenuContext } from "../context/MenuContext";
import { ResponsibilityContext } from "../context/ResponsibilityContext";
import api from "../api/api";

function ResponsibilityList() {
  const { menu, setMenu } = useContext(MenuContext);
  const [responsibility, setResponsibility] = useContext(ResponsibilityContext);
  const columns = [
    { field: "id", headerName: "ID", width: 50, type: "number" },
    {
      field: "name",
      headerName: "Name",
      width: 200,
    },
    {
      field: "description",
      headerName: "Description",
      width: 400,
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
      width: 100,
      headerAlign: "center",
      align: 'center',
      disableClickEventBubbling: true,
      renderCell: (cellValues) => {
        return (
          <Box sx={{ flexGrow: 1, alignItems: "center" }}>
            <Grid container>
              <Grid item>
                <Link to={"/responsibility/update/" + cellValues.row.id}>
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
  const [toDelete, setToDelete] = useState(0);

  const handleOpenMenu = (row) => {
    setToDelete(row.id);
    setOpenMenu(true);
  };
  const handleCloseMenu = () => {
    setToDelete(0);
    setOpenMenu(false);
  };

  const deleteButtonHandler = () => {
    console.log("Delete responsibility with id: " + toDelete);
    api.delete("/responsibility/delete/"+toDelete).then((res)=>{
      console.log(res.data);
    })
    setToDelete(0);
    setOpenMenu(false);
  };

  useEffect( async () => {
    await api.get("/responsibility").then((res) => {
      const data = res.data;
      setResponsibility(data);
    });
  }, [openMenu]);

  useEffect( async () => {
    await api.get("/responsibility").then((res) => {
      const data = res.data;
      setResponsibility(data);
    });
  }, []);

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
          <Typography variant="h4">Responsibility List</Typography>
          <Link to="/responsibility/add" style={{ textDecoration: "none" }}>
            <Button variant="contained">Add New</Button>
          </Link>
        </Box>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={responsibility}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
          ></DataGrid>
        </div>
        <Modal
          id="responsibilityForm"
          open={openMenu}
          onClose={handleCloseMenu}
        >
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
              Are you sure you want to delete this item?
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
}

export default ResponsibilityList;
