import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Form, Button } from "semantic-ui-react";
import EmployeeModal from "../UI/Modal";
import * as actions from "../../store/actions/employee";
import classes from "./EmployeeDetails.module.css";

const EmployeeDetails = (props) => {
  useEffect(() => {
    if (props.location.data) {
      const data = props.location.data;
      setFirstName(data.name.first);
      setLastName(data.name.last);
      setGender(data.gender);
      setBirthday(data.birthday);
    }
  }, [props]);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [gender, setGender] = useState(null);
  const [birthday, setBirthday] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const customerID = props?.location?.data?.customerID;
  const submittable = firstName && lastName && gender && birthday;

  const onDeleteClick = (event) => {
    event.preventDefault();
    setShowModal(true);
  };

  const onDeleteConfirmClick = () => {
    dispatch(actions.deleteEmployee(customerID));
    props.history.push("/");
  };

  const onDeleteCancelClick = (event) => {
    event.preventDefault();
    setShowModal(false);
  };
  const handleSubmit = () => {
    dispatch(actions.initiateFetchEmployee());

    if (customerID) {
      dispatch(
        actions.updateEmployee(
          customerID,
          firstName,
          lastName,
          gender,
          birthday
        )
      );
    } else {
      dispatch(actions.addEmployee(firstName, lastName, gender, birthday));
    }
    setTimeout(() => {
      dispatch(actions.fetchEmployeeSuccess());
    }, 1000);
    props.history.push("/");
  };

  const employeeForm = (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label>First Name</label>
        <input
          placeholder="First Name"
          onChange={(event) => setFirstName(event.target.value)}
          value={firstName}
        />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input
          placeholder="Last Name"
          onChange={(event) => setLastName(event.target.value)}
          value={lastName}
        />
      </Form.Field>
      <Form.Field>
        <Form.Field>
          <label>Gender</label>
          <select
            placeholder="Select Gender"
            onChange={(event) => setGender(event.target.value)}
            value={gender}
          >
            <option value=""></option>
            <option value="m">m</option>
            <option value="w">w</option>
          </select>
        </Form.Field>
        <Form.Field>
          <label>Date of Birth</label>
          <input
            placeholder="Date of Birth"
            type="date"
            onChange={(event) => setBirthday(event.target.value)}
            value={birthday}
          />
        </Form.Field>
        <p style={{color: 'red', fontSize:'smaller'}}>*All fields are mandatory</p>
      </Form.Field>
      <Button type="submit" disabled={!submittable}>
        Submit
      </Button>
      <Button negative disabled={!customerID} onClick={onDeleteClick}>
        Delete
      </Button>
    </Form>
  );
  return (
    <div className={classes.EmployeeDetails}>
      <a href="/">&larr; back</a>
      <h3>Employee Details</h3>
      {employeeForm}
      <EmployeeModal
        open={showModal}
        onDeleteConfirmClick={onDeleteConfirmClick}
        onDeleteCancelClick={onDeleteCancelClick}
      />
    </div>
  );
};

export default EmployeeDetails;
