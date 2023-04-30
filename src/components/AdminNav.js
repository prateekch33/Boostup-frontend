import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

function AdminNav() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  useEffect(() => {
    fetch(`/api/admin/adminshow`, {
      method: "GET",
      headers: {
        authorization: `${localStorage.getItem("authToken")}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == 0) {
          setName(data.name);
        } else {
          localStorage.removeItem("adminToken");
          navigate("/login");
        }
      });
  });
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/">Boostup Books</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as:{" "}
            <a
              href="#logout"
              onClick={() => localStorage.removeItem("authToken")}
            >
              {name}
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AdminNav;
