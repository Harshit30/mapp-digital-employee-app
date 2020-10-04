import React from 'react'
import { Modal, Header, Button, Icon } from 'semantic-ui-react'

const EmployeeModal = props => {
return (
    <Modal
    open={props.open}
  >
    <Header icon='archive' content='Delete Employee !!' />
    <Modal.Content>
      <p>
        Are you sure you want to delete the employee's record?
      </p>
    </Modal.Content>
    <Modal.Actions>
      <Button color='red' onClick={props.onDeleteCancelClick}>
        <Icon name='remove' /> No
      </Button>
      <Button color='green' onClick={props.onDeleteConfirmClick}>
        <Icon name='checkmark' /> Yes
      </Button>
    </Modal.Actions>
  </Modal>
)
}

export default EmployeeModal