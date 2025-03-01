import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const ADD_BOOKING = gql`
  mutation AddBooking($name: String!, $destination: String!, $date: String!, $email: String!) {
    addBooking(name: $name, destination: $destination, date: $date, email: $email) {
      id
      name
    }
  }
`;

const BookingForm = () => {
  const [formData, setFormData] = useState({ name: "", destination: "", date: "", email: "" });
  const [addBooking] = useMutation(ADD_BOOKING);

  const handleSubmit = (e) => {
    e.preventDefault();
    addBooking({ variables: formData });
    setFormData({ name: "", destination: "", date: "", email: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
      <input type="text" placeholder="Destination" onChange={(e) => setFormData({ ...formData, destination: e.target.value })} required />
      <input type="date" onChange={(e) => setFormData({ ...formData, date: e.target.value })} required />
      <input type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
      <button type="submit">Book</button>
    </form>
  );
};

export default BookingForm;
