import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const deleteBook = (id) => {
  console.log(id);
  fetch(`/api/books/deletebook`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: id }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.status == 0) {
        alert("Book Deleted");
      } else {
        alert("Book not deleted");
      }
    })
    .catch((err) => {
      alert(err.message);
    });
};

function ButtonCheck({ id, admin }) {
  if (admin) {
    return (
      <Button variant="primary" onClick={() => deleteBook(id)}>
        Delete
      </Button>
    );
  } else return <></>;
}

function Cards(props) {
  return (
    <Card style={{ width: "18rem", margin: "1%" }}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.author}
        </Card.Subtitle>
        <Card.Text>{props.description}</Card.Text>
        <ButtonCheck id={props.id} admin={props.admin} />
      </Card.Body>
    </Card>
  );
}

export default Cards;
