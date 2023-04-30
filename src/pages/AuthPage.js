import React from "react";
import Login from "../components/Login";
import NavbarComp from "../components/NavbarComp";

function AuthPage() {
  const login = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: "90vh",
  };
  return (
    <>
      <NavbarComp />
      <div style={login}>
        <Login />
      </div>
    </>
  );
}

export default AuthPage;
