import React, { Fragment, useState } from "react";
import EntranceForm from "../../EntranceForm";
import Swal from "sweetalert2";
import ParkingList from "../../ParkingList";
import ModalExitForm from "../../ModalExitForm";
import _ from "lodash";
import { defaultSlot, formDefault, options, sizeOption } from "./const";

const ParkingScreen = () => {
  const [formData, setFormData] = useState(formDefault);
  const [carSlot, setCarSlot] = useState(defaultSlot);

  const [moduleModal, setModuleModal] = useState({
    toggle: false,
    data: [],
  });

  const [tableData, setTableData] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddEntryPoint = () => {
    Swal.fire({
      title: "Do you want to save the changes?",
      showCancelButton: true,
      confirmButtonText: "Save",
    }).then((result) => {
      if (result.isConfirmed) {
        if (formData.additional_entry !== "") {
          options.push({
            value: formData.additional_entry,
            label: formData.additional_entry,
          });
          Swal.fire("Saved!", "", "success");
        } else {
          Swal.fire("Empty Text Cannot be saved!", "", "info");
        }
      }
    });
  };

  const handleSubmit = (count) => {
    if (count !== null) {
      if (formData.id >= 0) {
        formData.id = count;

        tableData.push({
          ...formData,
        });
      }
    }
    setTableData([...tableData]);
  };

  const handleAction = (row) => {
    setModuleModal({ toggle: true, data: row });
  };

  const checkCarSize = () => {
    if (formData.car_size !== "") {
      if (formData.car_size === "S") {
        let parkSlot = carSlot[Math.floor(Math.random() * carSlot.length)];
        return (formData.parking_slot = parkSlot);
      } else if (formData.car_size === "M") {
        let value = "SP";
        let cars = carSlot.filter(function (item) {
          return item !== value;
        });
        let slot = cars[Math.floor(Math.random() * cars.length)];
        return (formData.parking_slot = slot);
      } else {
        return (formData.parking_slot = carSlot[carSlot.length - 1]);
      }
    }
  };

  const handleClose = () => {
    setModuleModal({ toggle: false, data: [] });
  };

  const handleSubmitModal = (data) => {
    console.log(data);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <h1>Parking Screen</h1>
        <EntranceForm
          formData={formData}
          options={options}
          sizeOption={sizeOption}
          handleChange={handleChange}
          handleAddEntryPoint={handleAddEntryPoint}
          checkCarSize={checkCarSize}
          handleSubmit={handleSubmit}
        />
      </div>
      <div className="row">
        <ParkingList tableData={tableData} handleAction={handleAction} />
      </div>
      {!_.isEmpty(moduleModal.data) ? (
        <Fragment>
          <ModalExitForm
            toggle={moduleModal.toggle}
            closeModal={handleClose}
            tableData={moduleModal.data}
            handleChange={handleChange}
            handleSubmit={handleSubmitModal}
          />
        </Fragment>
      ) : null}
    </div>
  );
};

export default ParkingScreen;
