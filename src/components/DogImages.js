// src/components/DogImages.js
import React, { useEffect, useState } from "react";
import { fetchDogImages } from "../services/api";
import { Container, Grid, Card, CardMedia, Paper } from "@mui/material";

const DogImages = () => {
  const [dogImages, setDogImages] = useState([]);

  useEffect(() => {
    const getDogImages = async () => {
      const images = await fetchDogImages();
      setDogImages(images);
    };
    getDogImages();
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Grid container spacing={2}>
          {dogImages.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia component="img" image={image.url} alt="dog" />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
};

export default DogImages;
