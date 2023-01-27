import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import "./dashstyle.css";
import Sidebar from "./sideBar";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function DashboardLayout() {
  return (
    <div>
      <div className="upBar">
        <Box sx={{ flexGrow: 1, marginLeft: "40px", marginTop: "30px" }}>
          <Grid container spacing={2}>
            <Grid xs={4}>
              <Item>xs=4</Item>
            </Grid>
            <Grid xs={4}>
              <Item>xs=4</Item>
            </Grid>
            <Grid xs={4}>
              <Item>xs=4</Item>
            </Grid>
          </Grid>
        </Box>
        <div>
          {/* <Sidebar /> */}
          <div style={{ margin: "35px" }}>
            <table>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>program Title</th>
                <th>Education level</th>
                <th>program Time(suitable)</th>
                <th>Action</th>
              </tr>
              <tr>
                <td>Peter</td>
                <td>Griffin</td>
                <td>$100</td>
                <td>$100</td>
                <td>$100</td>
                <td>$100</td>
              </tr>
              <tr>
                <td>Lois</td>
                <td>Griffin</td>
                <td>$150</td>
                <td>$150</td>
                <td>$150</td>
                <td>$150</td>
              </tr>
              <tr>
                <td>Joe</td>
                <td>Swanson</td>
                <td>$300</td>
                <td>$300</td>
                <td>$300</td>
                <td>$300</td>
              </tr>
              <tr>
                <td>Cleveland</td>
                <td>Brown</td>
                <td>$250</td>
                <td>$250</td>
                <td>$250</td>
                <td>$250</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
