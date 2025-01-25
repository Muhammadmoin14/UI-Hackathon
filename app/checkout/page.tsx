'use client';

import React, { useState } from 'react';

function CheckoutForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    cardNumber: '',
    expirationDate: '',
    cvv: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        phone: '',
        cardNumber: '',
        expirationDate: '',
        cvv: ''
      });
    }, 2000);
  };

  return (
    <div className="w-full md:px-[150px] sm:px-[25px] py-[76px] flex justify-center bg-white" >
      <div className="rounded-2xl shadow-lg p-8 w-full md:max-w-[600px] bg-white" >
        <h2 className="text-2xl font-bold mb-6" style={{ color: "#029FAE" }}>Checkout</h2>

        {submitted ? (
          <div className="text-center text-green-700 font-medium">
            Thank you for your purchase! Your order has been placed successfully.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-bluesecond"
                required
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-bluesecond"
                required
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="address" className="text-sm font-medium">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
                className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-bluesecond"
                required
              />
            </div>

            <div className="flex space-x-4">
              <div className="flex flex-col space-y-2 w-1/2">
                <label htmlFor="city" className="text-sm font-medium">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-bluesecond"
                  required
                />
              </div>

              <div className="flex flex-col space-y-2 w-1/4">
                <label htmlFor="state" className="text-sm font-medium">State</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="State"
                  className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-bluesecond"
                  required
                />
              </div>

              <div className="flex flex-col space-y-2 w-1/4">
                <label htmlFor="zip" className="text-sm font-medium">Zip</label>
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  placeholder="Zip"
                  className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-bluesecond"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-bluesecond"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="cardNumber" className="text-sm font-medium">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                placeholder="Enter your card number"
                className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-bluesecond"
                required
              />
            </div>

            <div className="flex space-x-4">
              <div className="flex flex-col space-y-2 w-1/2">
                <label htmlFor="expirationDate" className="text-sm font-medium">Expiration Date</label>
                <input
                  type="text"
                  id="expirationDate"
                  name="expirationDate"
                  value={formData.expirationDate}
                  onChange={handleChange}
                  placeholder="MM/YY"
                  className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-bluesecond"
                  required
                />
              </div>

              <div className="flex flex-col space-y-2 w-1/2">
                <label htmlFor="cvv" className="text-sm font-medium">CVV</label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  placeholder="CVV"
                  className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-bluesecond"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-bluesecond w-full h-[50px] rounded-full text-white font-medium flex items-center justify-center disabled:opacity-50"
              
            >
              {isSubmitting ? 'Processing...' : 'Place Order'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default CheckoutForm;
