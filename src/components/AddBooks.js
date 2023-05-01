import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function AddBooks() {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [desc, setDesc] = useState("");
  const [filled, setFilled] = useState(0);

  useEffect(() => {
    if (filled) {
      fetch(`https://boostup-backend-5wl1p083o-prateekch33.vercel.app/api/books/addbooks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name, author: author, desc: desc }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status == 0) {
            alert("Books Added!!");
          } else {
            alert("Books Not Added!!");
          }
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  }, [filled]);
  return (
    <>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Enter Book Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Book Name"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Enter Author Name</Form.Label>
          <Form.Control
            type="text"
            name="author"
            placeholder="Book Author Name"
            required
            onChange={(e) => setAuthor(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Enter Book Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            required
            onChange={(e) => setDesc(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={() => setFilled(1)}>
          Submit
        </Button>
      </Form>
    </>
  );
}

export default AddBooks;
