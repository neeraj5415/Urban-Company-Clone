import { useState } from "react";

export default function Payment() {
  const [formData, setFormData] = useState({
    cardNumber: "",
    nameOnCard: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = (e) => {
    e.preventDefault();
    console.log("Payment submitted:", formData);
    alert("Payment Successful!"); // Simulate success
    // TODO: Call payment API or redirect
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Payment</h2>
      <form onSubmit={handlePayment} className="space-y-4">
        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          className="w-full p-3 border rounded"
          value={formData.cardNumber}
          onChange={handleChange}
        />
        <input
          type="text"
          name="nameOnCard"
          placeholder="Name on Card"
          className="w-full p-3 border rounded"
          value={formData.nameOnCard}
          onChange={handleChange}
        />
        <div className="flex space-x-4">
          <input
            type="text"
            name="expiry"
            placeholder="MM/YY"
            className="w-1/2 p-3 border rounded"
            value={formData.expiry}
            onChange={handleChange}
          />
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            className="w-1/2 p-3 border rounded"
            value={formData.cvv}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
}