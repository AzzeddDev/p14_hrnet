import { useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { addEmployee } from "../../store/employeesSlice"
import {Link, useLocation} from "react-router-dom"
import { routes } from "../../router/routes"
import Modal from "../../components/modal/success"
import {states} from "../../data/states";
import {departements} from "../../data/departements";
import SearchableDropdown from "../../components/dropdown";

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
            <section>
                <div className="imgCol">
                    <div className="formCol col-5">
                        <h1 className="title">Add an employee to <span>HRnet</span></h1>
                        <form id="create-employee" ref={formRef} onSubmit={handleSubmit}>
                            <div className="row gap-1 no-wrap">
                                <div className="col-6 p-0">
                                    <label htmlFor="first-name" className="labelHide">First Name</label>
                                    <input
                                        type="text"
                                        id="first-name"
                                        name="first-name"
                                        placeholder="First name"
                                        required={true}
                                    />
                                </div>
                                <div className="col-6 p-0">
                                    <label htmlFor="last-name" className="labelHide">Last Name</label>
                                    <input
                                        type="text"
                                        id="last-name"
                                        name="last-name"
                                        placeholder="Last name"
                                        required={true}
                                    />
                                </div>
                            </div>

                            <div className="row gap-1 no-wrap">
                                <div className="col-6 p-0">
                                    <label htmlFor="date-of-birth" className="smallLabel">Date of Birth</label>
                                    <input
                                        id="date-of-birth"
                                        type="date"
                                        name="date-of-birth"
                                        placeholder="Date of Birth"
                                        required={true}
                                    />
                                </div>
                                <div className="col-6 p-0">
                                    <label htmlFor="start-date" className="smallLabel">Start Date</label>
                                    <input
                                        id="start-date"
                                        type="date"
                                        name="start-date"
                                        placeholder="Date of Birth"
                                        required={true}
                                    />
                                </div>
                            </div>


                            <fieldset className="address">
                                <legend className="smallLabel">Address</legend>

                                <div>
                                    <div className="row gap-1 no-wrap mb-1">
                                        <div className="col-6 p-0">
                                            <label htmlFor="street" className="labelHide">Street</label>
                                            <input
                                                id="street"
                                                type="text"
                                                name="street"
                                                placeholder="Street"
                                                required={true}
                                            />
                                        </div>
                                        <div className="col-6 p-0">
                                            <label htmlFor="city" className="labelHide">City</label>
                                            <input
                                                id="city"
                                                type="text"
                                                name="city"
                                                placeholder="City"
                                                required={true}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="row gap-1 no-wrap">
                                        <div className="col-6 p-0">
                                            <label htmlFor="state" className="labelHide">State</label>
                                            <SearchableDropdown
                                                id="state"
                                                name="state"
                                                label="State"
                                                placeholder="-- Choose a State --"
                                                options={states}
                                            />
                                        </div>
                                        <div className="col-6 p-0">
                                            <label htmlFor="zip-code" className="labelHide">Zip Code</label>
                                            <input
                                                id="zip-code"
                                                type="number"
                                                name="zip-code"
                                                placeholder="Zip Code"
                                                required={true}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </fieldset>

                            <label htmlFor="department" className="smallLabel">Department</label>
                            <select name="department" id="department" className="mb-2" required={true}>
                                {departements.map((department) => (
                                    <option key={department} value={department}>
                                        {department}
                                    </option>
                                ))}
                            </select>
                            <div className="d-flex justify-content-between">
                                <button className="button muted" type="button" onClick={() => formRef.current?.reset()}>Reset form</button>
                                <button className="button" type="submit">Add Employee</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                {newlyAddedEmployee && (
                    <div style={{ textAlign: "center", display:"flex", flexDirection:"column", alignItems:"center" }}>
                        <p style={{ fontWeight: "bold", marginBottom: "1rem" }}>
                            {newlyAddedEmployee.firstName} {newlyAddedEmployee.lastName} is registered!
                        </p>
                        <Link className="button" to={routes.employeesList}>View Employees List</Link>
                    </div>
                )}
            </Modal>

        </>
    )
}

export default HomePage
