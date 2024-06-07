// src/components/UsersList.js
import React, { useEffect, useState } from "react";
import { fetchUsers } from "../services/api";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Container,
  TextField,
  AppBar,
  Toolbar,
  Box,
  CssBaseline,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./UsersList.css";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      const usersData = await fetchUsers();
      setUsers(usersData);
    };
    getUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <CssBaseline />
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Users List
          </Typography>
          <div className="search">
            <div className="searchIcon">
              <SearchIcon />
            </div>
            <TextField
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ ml: 2 }}
            />
          </div>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <List>
            {filteredUsers.map((user) => (
              <ListItem key={user.id} className="user-item">
                <ListItemText primary={user.name} secondary={user.email} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Container>
    </Box>
  );
};

export default UsersList;
