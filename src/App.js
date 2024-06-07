// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import UsersList from "./components/UsersList";
import Weather from "./components/Weather";
import DogImages from "./components/DogImages";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  CssBaseline,
  Button,
} from "@mui/material";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <CssBaseline />
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              GoBananas App
            </Typography>
            <Button color="inherit" component={Link} to="/">
              Users
            </Button>
            <Button color="inherit" component={Link} to="/weather">
              Weather
            </Button>
            <Button color="inherit" component={Link} to="/dogs">
              Dogs
            </Button>
          </Toolbar>
        </AppBar>
        <Container sx={{ mt: 4 }}>
          <Switch>
            <Route exact path="/" component={UsersList} />
            <Route path="/weather" component={Weather} />
            <Route path="/dogs" component={DogImages} />
          </Switch>
        </Container>
      </Box>
    </Router>
  );
};

export default App;
