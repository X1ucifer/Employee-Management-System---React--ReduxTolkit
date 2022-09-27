import { createSlice } from '@reduxjs/toolkit';


const initialState = [
  {
      "id": 1,
      "emp_name": "Akhil",
      "company_name": "XYZ",
      "email": "akhil@gmail.com",
      "state": "Tamil Nadu",
      "country":"India",
      "number":"8967564456"
  },
  {
      "id": 2,
      "emp_name": "Lenin",
      "company_name": "XYZ",
      "email": "lenin@gmail.com",
      "state": "Tamil Nadu",
      "country":"India",
      "number":"9089786767"
  },
 
]



export const employeeSlice = createSlice({
  name: 'employees',
  initialState,

  reducers: {
    addEmployees: (state, action) => {
      state.push(action.payload)
    },

    editEmployees: (state, action) => {
      const { id, emp_name,
      company_name,
      email,
      address,
      cv,
      number,
      country} = action.payload;

      const existingUser = state.find(employee => employee.id == id);

      console.log("uu",existingUser)
      if(existingUser) {
        existingUser.emp_name = emp_name;
        existingUser.email = email;
        existingUser.company_name = company_name;
        existingUser.address = address;
        existingUser.cv = cv;
        existingUser.number = number;
        existingUser.state = action.payload.state;
        existingUser.country = country;
      }
    },

    deleteEmployee: (state, action) => {
      const { id } = action.payload;
      const existingUser = state.find(user => user.id === id);
      if(existingUser) {
        return state.filter(user => user.id !== id);
      }
    },

  }

 
});


export const { addEmployees, editEmployees, deleteEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;
