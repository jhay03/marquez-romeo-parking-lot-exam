import React, { useState } from "react";
import Select from "react-select";
import moment from "moment";

const EntranceForm = ({
  formData,
  options,
  sizeOption,
  checkCarSize,
  handleChange,
  handleAddEntryPoint,
  handleSubmit,
}) => {
  const [count, setCount] = useState(0);

  const handleSubmitWithIndex = () => {
    setCount(count + 1);

    handleSubmit(count);
  };

  const ticketGenerator = () => {
    if (formData.plate_no !== "") {
      return (formData.ticket_no = "Ticket-OOMall-" + formData.plate_no);
    }
  };
  return (
    <div className="row">
      <div className="col-md-4 shadow-lg p-3 mb-5 bg-white rounded">
        <div className="form-group mt-2">
          <label htmlFor="">Plate Number</label>
          <input
            type="text"
            name="plate_no"
            id="plate_no"
            className="form-control"
            value={formData.plate_no}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="">Time-In</label>
          <input
            type="time"
            name="time_in"
            id="time_in"
            className="form-control"
            value={formData.time_in}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="">Date From</label>
          <input
            type="date"
            name="date_from"
            id="date_from"
            className="form-control"
            value={formData.date_from}
            min={moment().format("YYYY-MM-DD")}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="">Entry Point</label>
          <Select
            options={options}
            placeholder="-Select Entry Point-"
            name="entry_point"
            onChange={(e) =>
              handleChange({
                target: { name: "entry_point", value: e.value },
              })
            }
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="">Car Size</label>
          <Select
            options={sizeOption}
            placeholder="-Select Car Size-"
            name="car_size"
            onChange={(e) =>
              handleChange({
                target: { name: "car_size", value: e.value },
              })
            }
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="">Ticket Number</label>
          <input
            type="text"
            className="form-control"
            name="ticket_no"
            id="ticket_no"
            value={ticketGenerator() || ""}
            readOnly
            // onChange={handleChange}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="">Parking Slot</label>
          <input
            type="text"
            className="form-control"
            name="parking_slot"
            id="parking_slot"
            value={checkCarSize() || ""}
            readOnly
          />
        </div>

        {/* <div className="form-group mt-2">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            className="form-control"
            name="amount"
            id="amount"
            value={formData.amount}
            disabled
          />
        </div> */}
        <input
          type="button"
          className="btn btn-info mt-2"
          value="Submit"
          onClick={handleSubmitWithIndex}
        />
      </div>
      <div className="col-md-4"></div>
      <div className="col-md-4">
        <div className="card shadow-lg p-3 mb-5 bg-white rounded">
          <div className="card-body">
            <div className="form-group">
              <input
                type="text"
                name="additional_entry"
                id="additional_entry"
                className="form-control"
                placeholder="Add New Entry Point"
                value={formData.additional_entry}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="card-footer text-right">
            <input
              type="button"
              className="btn btn-success"
              value="ADD"
              onClick={handleAddEntryPoint}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntranceForm;
