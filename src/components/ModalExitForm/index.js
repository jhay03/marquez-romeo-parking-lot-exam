import React, { useEffect, useState } from "react";
import { Form, Modal, Col, Row, InputGroup, Button } from "react-bootstrap";
import moment from "moment";
const formDefault = {
  id: "",
  entry_point: "",
  additional_entry: "",
  plate_no: "",
  car_size: "",
  time_in: "",
  time_out: "",
  parking_slot: "",
  amount: 0,
  ticket_no: "",
};

const ModalExitForm = ({ tableData, toggle, closeModal, handleSubmit }) => {
  const [form, setForm] = useState([]);

  // Parking hours must be rounded up. Math.round
  let firstThreeHours = 40;
  let spParkingPerHr = 20;
  let mpParkingPerHr = 60;
  let lpParkingPerHr = 100;
  let parkingWholeDay = 5000;

  const handleChange = (e) => {
    let tmp = {
      ...tableData,
      ...form,
    };

    setForm({ ...tmp, [e.target.name]: e.target.value });
  };

  const parkingCost = () => {
    // check if date is same date or 0
    let total_amount = 0;
    let date_time_diff = 0;

    if (tableData.car_size === "S") {
      console.log("Small");
    } else if (tableData.car_size === "M") {
      console.log("test");
    } else if (tableData.car_size === "L") {
      console.log("Large");
    }
  };

  // const parkignCost = () => {
  //   let price = form.price;
  //   let input_price = form.input_price;

  //   let calculate = input_price * price;

  //   return (form.computed_price = calculate.toFixed(2));
  // };

  const handleSubmitFromModal = () => {
    const startDate = moment(tableData.date_from);
    const endDate = moment(form.date_to);

    const timeStart = moment(tableData.time_in);
    const timeEnd = moment(form.time_out);

    const time_diff = endDate.diff(startDate);
    const days_diff = moment.duration(Math.round(time_diff, "days"));

    let days = days_diff._data.days;
    if (days >= 0) {
    } else if (days >= 1) {
    }
    // handleSubmit(data);

    // if (time_diff >= 3) {
    //   return (form.amount = total_amount + firstThreeHours);
    // }
    // let data = {
    //   ...form,
    //   time_out: form.time_out,
    //   date_to: form.date_to,
    //   amount: form.amount,
    // };
  };
  return (
    <Modal
      show={toggle}
      onHide={closeModal}
      backdrop="static"
      keyboard={false}
      dialogClassName="modal-width"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-custom-modal-styling-title">
          Add Time-Out
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group as={Row}>
          <Form.Label column md="4" className="mt-3">
            Plate Number
          </Form.Label>

          <Col md="8">
            <InputGroup className="mt-3">
              <Form.Control
                type="text"
                name="plate_no"
                value={tableData.plate_no}
                readOnly
              />
            </InputGroup>
          </Col>

          <Form.Label column md="4" className="mt-3">
            Parking Slot
          </Form.Label>

          <Col md="8">
            <InputGroup className="mt-3">
              <Form.Control
                type="text"
                name="parking_slot"
                value={tableData.parking_slot}
                readOnly
              />
            </InputGroup>
          </Col>

          <Form.Label column md="4" className="mt-3">
            Ticket Number
          </Form.Label>

          <Col md="8">
            <InputGroup className="mt-3">
              <Form.Control
                type="text"
                name="plate_no"
                value={tableData.ticket_no}
                // onChange={handleChange}
                readOnly
              />
            </InputGroup>
          </Col>

          <Form.Label column md="4" className="mt-3">
            Car Size
          </Form.Label>

          <Col md="8">
            <InputGroup className="mt-3">
              <Form.Control
                type="text"
                name="car_size"
                value={tableData.car_size}
                readOnly

                // onChange={handleChange}
              />
            </InputGroup>
          </Col>
          <Form.Label column md="4" className="mt-3">
            Time-In
          </Form.Label>

          <Col md="8">
            <InputGroup className="mt-3">
              <Form.Control
                type="time"
                name="time_in"
                readOnly
                value={tableData.time_in}
                // onChange={handleChange}
              />
            </InputGroup>
          </Col>
          <Form.Label column md="4" className="mt-3">
            Date From
          </Form.Label>

          <Col md="8">
            <InputGroup className="mt-3">
              <Form.Control
                type="date"
                name="date_from"
                value={tableData.date_from}
                readOnly
                // onChange={handleChange}
              />
            </InputGroup>
          </Col>

          <Form.Label column md="4" className="mt-3">
            Date To
          </Form.Label>

          <Col md="8">
            <InputGroup className="mt-3">
              <Form.Control
                type="date"
                name="date_to"
                value={form.date_to}
                min={tableData.date_from}
                onChange={handleChange}
              />
            </InputGroup>
          </Col>
          <Form.Label column md="4" className="mt-3">
            Time-Out
          </Form.Label>

          <Col md="8">
            <InputGroup className="mt-3">
              <Form.Control
                type="time"
                name="time_out"
                value={form.time_out}
                onChange={handleChange}
              />
            </InputGroup>
          </Col>

          <Form.Label column md="4" className="mt-3">
            Total
          </Form.Label>

          <Col md="8 ">
            <InputGroup className="mt-3">
              <InputGroup.Text id="basic-addon2"> PHP </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="0.00"
                name="amount"
                value={parkingCost() || 0}
                readOnly
              />
            </InputGroup>
          </Col>
          <Modal.Footer className="mt-3">
            <Button
              variant="info"
              onClick={handleSubmitFromModal}
              className="mr-2"
            >
              Submit
            </Button>
            <Button variant="warning" onClick={closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Form.Group>
      </Modal.Body>
    </Modal>
  );
};

export default ModalExitForm;
