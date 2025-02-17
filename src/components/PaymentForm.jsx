import React from "react";
import "./PaymentForm.css";

const PaymentForm = () => {
  return (
    <div className="payment-container">
      <div style="height:100px; width:100px;"></div>
      <div className="payment-box">
        {/* Header */}
        <div className="header">
          <div className="logo">
            <span className="dot"></span>
            <span className="brand">AceCoinPay</span>
          </div>
          <div className="timer">
            <span>01</span>:<span>19</span>
          </div>
        </div>

        {/* Form Section */}
        <div className="form">
          <label>Card Number</label>
          <div className="input-group">
            <input type="text" value="2412 - 7512 - 3412 - 3456" readOnly />
            <button className="edit-btn">✏️</button>
          </div>

          <label>CVV Number</label>
          <div className="input-group">
            <input type="text" value="327" readOnly />
          </div>

          <label>Expiry Date</label>
          <div className="input-group">
            <input type="text" value="09" readOnly />
            <span>/</span>
            <input type="text" value="22" readOnly />
          </div>

          <label>Password</label>
          <div className="input-group">
            <input type="password" value="••••••••" readOnly />
          </div>

          <button className="pay-now">Pay Now</button>
        </div>
      </div>

      {/* Card Section */}
      <div className="card-section">
        <div className="card">
          <img src="/coin.jpg" alt="Card" className="card-image" />
        </div>
        <div className="summary">
          <p><strong>Company:</strong> Apple</p>
          <p><strong>Order Number:</strong> 1266201</p>
          <p><strong>Product:</strong> MacBook Air</p>
          <p><strong>VAT (20%):</strong> $100.00</p>
          <h2>You have to pay <span>$549.99 USD</span></h2>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
