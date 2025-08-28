import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <Container fluid className="mt-5 p-5 w-50 bg-light mx-auto shadow content ">
      <h1 className="text-center">The count value is: {count}</h1>
      <h4 className="text-center">
        <Button variant="success" className="" onClick={() => setCount(count + 1)}>
          <span className="bi bi-plus fs-2 "></span>
        </Button>
        <Button variant="danger" className="ms-3" onClick={() => setCount(count - 1)}>
          <span className="bi bi-dash fs-2 "></span>
        </Button>
      </h4>
    </Container>
  );
}
