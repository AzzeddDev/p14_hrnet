import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Employee = {
    firstName: string
    lastName: string
    dateOfBirth: string
    startDate: string
    street: string
    city: string
    state: string
    zipCode: string
    department: string
}

type EmployeesState = {
    employees: Employee[]
}

const initialState: EmployeesState = {
    employees: [],
}

const employeesSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        addEmployee: (state, action: PayloadAction<Employee>) => {
            state.employees.push(action.payload)
        },
    },
})

export const { addEmployee } = employeesSlice.actions
export default employeesSlice.reducer
