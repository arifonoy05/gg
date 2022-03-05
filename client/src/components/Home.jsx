import React, { useContext, useEffect } from "react";
import { Card, Grid, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { MenuContext } from "../context/MenuContext";
import api from "../api/api";

const Home = () => {
  const { menu } = useContext(MenuContext);

  return (
    <Grid container spacing={2}>
      {menu.map((item) => {
        return (
          <Grid key={item.id} item xs={6} sm={4}>
            <Link to={item.menu_URL}>
              <Card>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {item.name}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        );
      })}

      {/* <Grid item xs={6} sm={4}>
        <Link to="/responsibility">
          <Card>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Responsibility
              </Typography>
            </CardContent>
          </Card>
        </Link>
      </Grid> */}
    </Grid>
  );
};

export default Home;
