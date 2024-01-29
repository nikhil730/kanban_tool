import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Workspace from "./components/workspace";
import data from "./data/data";

export const AppContext = React.createContext();

//fetching local data
const getInitGroupState = () => {
  const savedGroup = localStorage.getItem("group");
  return savedGroup ? savedGroup : "Status";
};
const getInitOrderState = () => {
  const savedOrder = localStorage.getItem("order");
  return savedOrder ? savedOrder : "Priority";
};

function App() {
  const [group, setGroup] = useState(getInitGroupState);
  const [order, setOrder] = useState(getInitOrderState);
  const [users, setUsers] = useState([]);
  const [tickets, setTickets] = useState([]);
  console.log(data);
  // setTickets(data.tickets);
  // setUsers(data.users);

  useEffect(() => {
    fetchUserData();
  }, []);

  //fetching data from API
  const fetchUserData = () => {
    try {
      setTickets(data.tickets);
      setUsers(data.users);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Save state to localStorage whenever group or order changes
  useEffect(() => {
    localStorage.setItem("group", group);
    localStorage.setItem("order", order);
  }, [group, order]);

  return (
    <>
      <AppContext.Provider
        value={{ group, setGroup, order, setOrder, users, tickets }}
      >
        <Navbar />
        <Workspace />
      </AppContext.Provider>
    </>
  );
}

export default App;
