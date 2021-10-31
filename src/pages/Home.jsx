import React from "react";
import Announcement from "../components/Announcement";
import { Categories } from "../components/Categories";
import Navbar from "../components/Navbar";
import Silder from "../components/Silder";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Silder />
      <Categories />
    </div>
  );
};

export default Home;
