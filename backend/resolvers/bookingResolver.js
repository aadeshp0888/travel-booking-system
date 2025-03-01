const Booking = require("../models/Booking");

const resolvers = {
  Query: {
    getBookings: async () => await Booking.find(),
  },
  Mutation: {
    addBooking: async (_, { name, destination, date, email }) => {
      const newBooking = new Booking({ name, destination, date, email });
      await newBooking.save();
      return newBooking;
    },
  },
};

module.exports = resolvers;
