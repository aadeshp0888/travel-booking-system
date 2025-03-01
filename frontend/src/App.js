import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/bookings">Bookings</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookings" element={<Booking />
} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
};

export default App;
