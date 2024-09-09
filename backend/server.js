const express = require("express");
const printer = require("printer");
const cors = require("cors");

const app = express();

// Enable CORS to allow communication between React frontend and Node.js backend
app.use(cors());
app.get("/check-printer", (req, res) => {
  // Get list of all printers connected to the system
  const printers = printer.getPrinters();

  // Search for the TP808S printer by name
  const tp808sPrinter = printers.find((p) => p.name.includes("TP808S"));

  if (tp808sPrinter) {
    // If printer is found, return its details and connected status
    res.json({ connected: true, printer: tp808sPrinter });
  } else {
    // If printer is not found, return connected: false
    res.json({ connected: false });
  }
});

// Start the backend server on port 5000
app.listen(5000, () => {
  console.log("Backend server is running on http://localhost:5000");
});
