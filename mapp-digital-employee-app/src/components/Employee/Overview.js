import React, { Fragment } from "react";
import { Button, Icon, Table, Placeholder } from "semantic-ui-react";
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom'

const EmployeeOverview = props => {
  const empState = useSelector(
    (store) => store.employee
  );

  const onAddEmployeeClick = path => {
    props.history.push(path)
  }
  const empInfo =
    Object.keys(empState).length && !empState.loading ? (
      empState.employee.map((emp) => (
        <Table.Row key={emp.customerID}>
          <Table.Cell><Link to={{pathname: '/details', data:emp}}>{emp.customerID}</Link></Table.Cell>
          <Table.Cell>{emp.name.first + " " + emp.name.last}</Table.Cell>
          <Table.Cell>{emp.gender}</Table.Cell>
          <Table.Cell>{emp.birthday}</Table.Cell>
        </Table.Row>
      ))
    ) : (
      <Fragment>
        <Table.Row>
          <Table.Cell colSpan={4}>
            <Placeholder fluid>
              <Placeholder.Line></Placeholder.Line>
            </Placeholder>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell colSpan={4}>
            <Placeholder fluid>
              <Placeholder.Line></Placeholder.Line>
            </Placeholder>
          </Table.Cell>
        </Table.Row>
      </Fragment>
    );

    const empTable =  <Table celled compact>
    <Table.Header fullWidth>
      <Table.Row>
        <Table.HeaderCell>Emp ID</Table.HeaderCell>
        <Table.HeaderCell>Name </Table.HeaderCell>
        <Table.HeaderCell>Gender</Table.HeaderCell>
        <Table.HeaderCell>Date of Birth</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>{empInfo}</Table.Body>

    <Table.Footer fullWidth>
      <Table.Row>          
        <Table.HeaderCell colSpan="4">
          <Button
            floated="right"
            icon
            labelPosition="left"
            primary
            size="small"
            onClick={() => onAddEmployeeClick('/details')}
          >
            <Icon name="user" /> Add Employee
          </Button>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>

  return (
    empTable
  )
};

export default EmployeeOverview;
