import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

export default function CarCard({ image, name, mileage, price, estimate, shipping }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: 3,
        boxShadow: 3,
        transition: "0.3s",
        "&:hover": {
          transform: "scale(1.03)",
          boxShadow: 6,
        },
      }}
    >
      {/* Car Image */}
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={name}
        sx={{ objectFit: "cover" }}
      />

      {/* Car Details */}
      <CardContent>
        <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
          {name}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {mileage}
        </Typography>

        <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
          {price}
        </Typography>

        <Typography variant="body2" color="error">
          {estimate}
        </Typography>

        <Typography variant="body2" color="success.main" sx={{ mt: 1 }}>
          {shipping}
        </Typography>
      </CardContent>
    </Card>
  );
}


