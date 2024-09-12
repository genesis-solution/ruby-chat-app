import * as React from "react";
import { useLocation, useParams } from "react-router-dom";
import Header from "../components/Header";
import RoomList from "../components/RoomList";
import Search from "../components/Search";
import MessageList from "../components/MessageList";

const Home = () => {
  return (
    <>
      <div className="container mx-auto my-3 rounded-lg shadow-lg ">
        <Header />
        <div className="flex flex-row justify-between bg-white">
          <RoomList />
        </div>
      </div>
    </>
  );
};

export default Home;
