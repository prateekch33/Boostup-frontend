import React from "react";
import NavbarComp from "../components/NavbarComp";
import CardHolder from "../components/CardHolder";

const mainContent = {
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  justifyContent: "space-around",
  alignItems: "center",
  padding: "2%",
  width: "100%",
  margin: "3%",
};

function HomePage() {
  return (
    <>
      <NavbarComp />
      <div style={mainContent}>
        <CardHolder />
      </div>
    </>
  );
}

export default HomePage;
