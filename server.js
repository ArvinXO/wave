import express from "express";
import compression from "compression";
import path from "path";

const app = express();

// Use the compression middleware
app.use(compression());

// Serve static assets
app.use(express.static(new URL("public/assets", import.meta.url).pathname));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
