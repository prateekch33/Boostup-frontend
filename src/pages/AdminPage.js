import React from "react";
import AddBooks from "../components/AddBooks";
import AdminNav from "../components/AdminNav";
import ShowBooks from "../components/ShowBooks";

const addBooks = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
};

const showBooks = {
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
  width: "100%",
  marginTop: "3%",
};

function AdminPage() {
  return (
    <div>
      <AdminNav />
      <div style={addBooks}>
        <AddBooks />
      </div>
      <div style={showBooks}>
        <ShowBooks />
      </div>
    </div>
  );
}

export default AdminPage;
