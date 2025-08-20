"use client";
import { useState } from "react";
import { TextField, Button, Box, Typography, Container, Paper } from "@mui/material";

export default function RegisterForm() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch ("http://localhost:4000/api/user/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
    
  const {message} = await res.json();
      setMessage(message);
    } catch (error) {
      console.error("Error during registration", error)
    }
    // Handle registration logic here
    console.log("Register:", form);
  };

  return (
    <Container maxWidth="sm" sx={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
      <Paper elevation={3} sx={{ p: 4, width: "100%" }}>
        <Typography variant="h5" component="h1" gutterBottom>
          Register
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="Username"
            name="username"
            value={form.username}
            onChange={handleChange}
            variant="outlined"
            required
            fullWidth
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            variant="outlined"
            required
            fullWidth
          />
          <Button type="submit" variant="contained" color="primary">
            Register
          </Button>
        </Box>
          <Typography variant="body2" color="textSecondary" sx={{ mt:2}}>
            {message && message}
          </Typography>
  
      </Paper>
    </Container>
  );
}