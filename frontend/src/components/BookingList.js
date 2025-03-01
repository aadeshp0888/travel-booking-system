import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_BOOKINGS = gql`
  query {
    getBookings {
      id
      name
      destination
      date
      email
    }
  }
`;

const BookingList = () => {
  const { loading, error, data } = useQuery(GET_BOOKINGS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading bookings</p>;

  return (
    <ul>
      {data.getBookings.map((booking) => (
        <li key={booking.id}>
          {booking.name} is traveling to {booking.destination} on {booking.date} ({booking.email})
        </li>
      ))}
    </ul>
  );
};

export default BookingList;
