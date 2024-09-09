import React from "react";
import printJS from "print-js";
import "./PrintButton.css";
import logo from "./images.png";

const PrintButton = () => {
  const handlePrint = () => {
    printJS({
      printable: "printable-section",
      type: "html",
      targetStyles: ["*"],
      style: "@page { size: 80mm auto; margin: 0; }",
    });
  };

  return (
    <div>
      <div id="printable-section">
        <img
          src={logo}
          alt="Store Logo"
          style={{ width: "100%", maxWidth: "80mm" }}
        />
        <h1>Receipt</h1>
        <p>Store Name: ABC Store</p>
        <p>Date: {new Date().toLocaleDateString()}</p>
        <p>Time: {new Date().toLocaleTimeString()}</p>
        <hr />
        <p>Item 1: $10.00</p>
        <p>Item 2: $5.00</p>
        <hr />
        <p>Total: $15.00</p>
        <p>Thank you for shopping with us!</p>
      </div>
      <button onClick={handlePrint}>Print Receipt</button>
    </div>
  );
};

export default PrintButton;
