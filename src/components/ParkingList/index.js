import React from "react";

const ParkingList = ({ tableData, handleAction }) => {
  return (
    <div className="col-md-12">
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Plate Number</th>
              <th scope="col">Parking Slot</th>
              <th scope="col">Ticket Number </th>
              <th scope="col">Date - Time-In</th>
              <th scope="col">Size</th>
              <th scope="col">Entry Point</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, key) => {
              return (
                <tr key={key}>
                  <td>{row.id}</td>
                  <td>{row.plate_no}</td>
                  <td>{row.parking_slot}</td>
                  <td>{row.ticket_no}</td>
                  <td>
                    {row.date_from} - {row.time_in}
                  </td>
                  <td>{row.car_size}</td>
                  <td>{row.entry_point}</td>
                  <td>
                    <input
                      type="button"
                      value="Action"
                      className="btn btn-warning"
                      onClick={() => handleAction(row)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ParkingList;
