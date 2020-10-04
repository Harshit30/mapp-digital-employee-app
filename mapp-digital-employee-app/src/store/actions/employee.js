export const initiateFetchEmployee = () => ({type:'INITIATE_FETCH_EMPLOYEE'})


export const updateEmployee = (customerID, firstName, lastName, gender, birthday) => {
    return {
        type: "UPDATE_EMPLOYEE",
        empData: {
          customerID: customerID,
          name: {
            first: firstName,
            last: lastName,
          },
          gender: gender,
          birthday: birthday,
        },
      }
}

export const addEmployee = (firstName, lastName, gender, birthday) => {
    return {
        type: "ADD_EMPLOYEE",
        empData: {
          customerID: Math.floor(Math.random() * 100),
          name: {
            first: firstName,
            last: lastName,
          },
          gender: gender,
          birthday: birthday,
        },
      }
}

export const fetchEmployeeSuccess = () => {
    return {
        type: "FETCH_EMPLOYEE_SUCCESS",
      }
}

export const deleteEmployee = customerId => {
    return {
        type: "DELETE_EMPLOYEE",
        customerId: customerId,
      }
}