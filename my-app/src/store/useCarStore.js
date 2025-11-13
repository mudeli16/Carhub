import { create } from "zustand";
import carsData from "../data/carsData";

const useCarStore = create((set, get) => ({
  // global search text
  searchTerm: "",
  setSearchTerm: (term) => set({ searchTerm: term }),

  // selected type: all, new, used, luxury
  carType: "all",
  setCarType: (type) => set({ carType: type }),

  // getter function to compute filtered results on demand
  getFilteredCars: () => {
    const { carType, searchTerm } = get();

    let carList = [];

    if (carType === "all") {
      carList = [
        ...carsData.new,
        ...carsData.used,
        ...carsData.luxury,
      ];
    } else {
      carList = carsData[carType] || [];
    }

    return carList.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  },
}));

export default useCarStore;
