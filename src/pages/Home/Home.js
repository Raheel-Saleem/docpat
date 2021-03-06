import React from "react";
import Search from "./Search";
import Title from "./Title";
import Specialities from "./Specialities";
import Features from "./Features";
import ProfileModal from "./AreYouADoctor";
function Home() {
  return (
    <>
      <ProfileModal />
      <div className="main-wrapper">
        <Search />
        <Title />
        <Specialities />
        <Features />
      </div>
    </>
  );
}

export default Home;
