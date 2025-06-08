import { useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { addEmployee } from "../../store/employeesSlice"
import { Link } from "react-router-dom"
import { routes } from "../../router/routes"
import Modal from "../../components/modal/success"

const HomePage = () => {
    const dispatch = useDispatch()
    const formRef = useRef<HTMLFormElement>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const [newlyAddedEmployee, setNewlyAddedEmployee] = useState<{ firstName: string, lastName: string } | null>(null)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!formRef.current) return

        const formData = new FormData(formRef.current)

        const newEmployee = {
            firstName: formData.get("first-name") as string,
            lastName: formData.get("last-name") as string,
            dateOfBirth: formData.get("date-of-birth") as string,
            startDate: formData.get("start-date") as string,
            street: formData.get("street") as string,
            city: formData.get("city") as string,
            state: formData.get("state") as string,
            zipCode: formData.get("zip-code") as string,
            department: formData.get("department") as string,
        }

        dispatch(addEmployee(newEmployee))
        setNewlyAddedEmployee({
            firstName: newEmployee.firstName,
            lastName: newEmployee.lastName
        })
        setIsModalOpen(true)
        formRef.current.reset()
    }

    return (
        <>
            <div className="title">
                <h1>HRnet</h1>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                {newlyAddedEmployee && (
                    <div style={{ textAlign: "center" }}>
                        <p style={{ fontWeight: "bold", marginBottom: "1rem" }}>
                            {newlyAddedEmployee.firstName} {newlyAddedEmployee.lastName} is registered!
                        </p>
                        <Link to={routes.employeesList}>View Current Employees</Link>
                    </div>
                )}
            </Modal>

            <div className="container">
                <Link to={routes.employeesList}>View Current Employees</Link>
                <h2>Create Employee</h2>
                <form id="create-employee" ref={formRef} onSubmit={handleSubmit}>
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" name="first-name"/>

                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" name="last-name"/>

                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <input id="date-of-birth" type="date" name="date-of-birth"/>

                    <label htmlFor="start-date">Start Date</label>
                    <input id="start-date" type="date" name="start-date"/>


                    <fieldset className="address">
                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input id="street" type="text" name="street"/>

                        <label htmlFor="city">City</label>
                        <input id="city" type="text" name="city"/>

                        <label htmlFor="state">State</label>
                        <select name="state" id="state">
                            <option>New York</option>
                            <option>Washington</option>
                            <option>Seattle</option>
                            <option>Dallas</option>
                        </select>

                        <label htmlFor="zip-code">Zip Code</label>
                        <input id="zip-code" type="number" name="zip-code"/>
                    </fieldset>

                    <label htmlFor="department">Department</label>
                    <select name="department" id="department">
                        <option>Sales</option>
                        <option>Marketing</option>
                        <option>Engineering</option>
                        <option>Human Resources</option>
                        <option>Legal</option>
                    </select>
                    <button type="submit">Save</button>
                </form>
            </div>
        </>
    )
}

export default HomePage
