import React from "react";
import Header from "../components/Header";
import HomeContent from "../components/HomeContent";
import PageHero from "../components/PageHero";
import SideBar from "../components/SideBar";

const Home = () => {
  return <div>
    <Header/>
    <PageHero/>
    <SideBar/>
    <HomeContent/>
  </div>
};
export default Home;
