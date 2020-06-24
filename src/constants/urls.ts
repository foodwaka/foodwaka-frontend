const isDevelopment =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development";

export const BASE_URL = isDevelopment
  ? "https://api.foodwaka.com/api"
  : "https://localhost:44369/api" || "https://localhost:5001/api";
