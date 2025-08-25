import { Employee } from "../store/employeesSlice"

export const defaultEmployees: Employee[] = [
    {
        firstName: "John",
        lastName: "Doe",
        dateOfBirth: "1990-05-12",
        startDate: "2020-01-10",
        street: "123 Main St",
        city: "New York",
        state: "Alaska",
        zipCode: "10001",
        department: "Engineering",
    },
    {
        firstName: "Alain",
        lastName: "Smith",
        dateOfBirth: "1985-11-23",
        startDate: "2018-07-01",
        street: "456 Oak Ave",
        city: "Los Angeles",
        state: "Alabama",
        zipCode: "90001",
        department: "Marketing",
    },
]
