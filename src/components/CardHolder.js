import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import Form from "react-bootstrap/Form";

const searchInput = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "50%",
};

const showBooks = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  width: "90%",
  marginTop: "3%",
};

function CardHolder() {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch(`/api/books/bookshow?search=${search}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 0) {
          setBooks(data.data);
        } else {
          alert(data.error);
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [search]);
  return (
    <>
      <div style={searchInput}>
        <Form.Control
          type="text"
          placeholder="Search Books"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div style={showBooks}>
        {books.map((e) => {
          return (
            <Cards name={e.name} author={e.author} key={e._id} admin={0} />
          );
        })}
      </div>
    </>
  );
}

export default CardHolder;
