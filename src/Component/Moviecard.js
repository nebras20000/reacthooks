import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

const Moviecard = ({ movie }) => {
  var rate1 = {
    size: 30,
    value: movie.rate,
    edit: false,
  };
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.posterUrl} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <ReactStars {...rate1} />
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Moviecard;
