import React, { useEffect, useState } from "react";
import Cards from "./Cards";

function ShowBooks() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch(`/api/books/getallbooks`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == 0) {
          setBooks(data.data);
        } else {
          alert(data.error);
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);
  return (
    <>
      {books.map((e) => {
        return (
          <Cards
            name={e.name}
            author={e.author}
            desc={e.description}
            key={e._id}
            id={e._id}
            admin={1}
          />
        );
      })}
    </>
  );
}

export default ShowBooks;
