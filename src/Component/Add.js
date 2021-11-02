import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function Add({ addnew }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newfilm, setnewfilm] = useState({
    title: "",
    description: "",
    rate: "",
    posterUrl: "",
  });

  return (
    <div className="Add">
      <Button variant="primary" onClick={handleShow}>
        Add new movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adding new movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="formadd">
            <label>Title</label>
            <input
              onChange={(e) =>
                setnewfilm({ ...newfilm, title: e.target.value })
              }
            ></input>
            <label>Description</label>
            <input
              onChange={(e) =>
                setnewfilm({ ...newfilm, description: e.target.value })
              }
            ></input>
            <label>Rate</label>
            <input
              onChange={(e) => setnewfilm({ ...newfilm, rate: e.target.value })}
            ></input>
            <label>Image</label>
            <input
              onChange={(e) =>
                setnewfilm({ ...newfilm, posterUrl: e.target.value })
              }
            ></input>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => addnew(newfilm)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Add;
