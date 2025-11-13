import React from "react";
import { useParams } from "react-router-dom";
import CarCard from "../components/CarCard";
import useCarStore from "../store/useCarStore";
import { TextField } from "@mui/material";

export default function Cars() {
  const { type } = useParams();

  // Zustand store
  const {
    searchTerm,
    setSearchTerm,
    setCarType,
    getFilteredCars,
  } = useCarStore();

  // Update category from URL (new/used/luxury/all)
  React.useEffect(() => {
    setCarType(type || "all");
  }, [type, setCarType]);

  const cars = getFilteredCars();

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>
        {type === "luxury"
          ? "Luxury Cars 💎"
          : type === "new"
          ? "New Cars 🚘"
          : type === "used"
          ? "Used Cars 🚗"
          : "All Cars 🚘"}
      </h2>

      {/* Search Bar */}
      <div style={styles.searchContainer}>
        <TextField
          label="Search cars…"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          fullWidth
          sx={{ maxWidth: "600px" }}
        />
      </div>

      {/* Results Grid */}
      <div style={styles.grid}>
        {cars.length > 0 ? (
          cars.map((car) => (
            <CarCard
              key={car.id}
              image={car.image}
              name={car.name}
              mileage={car.mileage}
              price={car.price}
              estimate={car.estimate}
              shipping={car.shipping}
            />
          ))
        ) : (
          <p style={styles.noResults}>No cars found.</p>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: { padding: "2rem" },
  heading: { textAlign: "center", marginBottom: "1rem" },
  searchContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "1.5rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "1.5rem",
  },
  noResults: {
    textAlign: "center",
    color: "#999",
  },
};

