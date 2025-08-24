import { useRef } from "react"
import { useDispatch } from "react-redux"
import { addEmployee } from "../../store/employeesSlice"
import SearchableDropdown from "../dropdown"
import { states } from "../../data/states"
import { departements } from "../../data/departements"

interface EmployeeFormProps {
    onSuccess: (firstName: string, lastName: string) => void
}

const EmployeeForm: React.FC<EmployeeFormProps> = ({ onSuccess }) => {
    const dispatch = useDispatch()
    const formRef = useRef<HTMLFormElement>(null)

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
        onSuccess(newEmployee.firstName, newEmployee.lastName)
        handleReset()
    }

    const handleReset = () => {
        // reset native form inputs
        formRef.current?.reset()

        // manually reset the hidden input inside SearchableDropdown
        const dropdownInput = formRef.current?.querySelector<HTMLInputElement>("#state")
        if (dropdownInput) dropdownInput.value = ""
    }

    return (
        <form id="create-employee" ref={formRef} onSubmit={handleSubmit}>
            {/* First & Last Name */}
            <div className="row gap-1 no-wrap">
                <div className="col-6 p-0">
                    <label htmlFor="first-name" className="labelHide">First Name</label>
                    <input type="text" id="first-name" name="first-name" placeholder="First name" required />
                </div>
                <div className="col-6 p-0">
                    <label htmlFor="last-name" className="labelHide">Last Name</label>
                    <input type="text" id="last-name" name="last-name" placeholder="Last name" required />
                </div>
            </div>

            {/* Dates */}
            <div className="row gap-1 no-wrap">
                <div className="col-6 p-0">
                    <label htmlFor="date-of-birth" className="smallLabel">Date of Birth</label>
                    <input type="date" id="date-of-birth" name="date-of-birth" required />
                </div>
                <div className="col-6 p-0">
                    <label htmlFor="start-date" className="smallLabel">Start Date</label>
                    <input type="date" id="start-date" name="start-date" required />
                </div>
            </div>

            {/* Address */}
            <fieldset className="address">
                <legend className="smallLabel">Address</legend>
                <div className="row gap-1 no-wrap mb-1">
                    <div className="col-6 p-0">
                        <label htmlFor="street" className="labelHide">Street</label>
                        <input type="text" id="street" name="street" placeholder="Street" required />
                    </div>
                    <div className="col-6 p-0">
                        <label htmlFor="city" className="labelHide">City</label>
                        <input type="text" id="city" name="city" placeholder="City" required />
                    </div>
                </div>

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
                        <input type="number" id="zip-code" name="zip-code" placeholder="Zip Code" required />
                    </div>
                </div>
            </fieldset>

            {/* Department */}
            <label htmlFor="department" className="smallLabel">Department</label>
            <select name="department" id="department" className="mb-2" required>
                {departements.map((d) => (
                    <option key={d} value={d}>{d}</option>
                ))}
            </select>

            <div className="d-flex justify-content-between">
                <button type="button" className="button muted" onClick={handleReset}>Reset form</button>
                <button type="submit" className="button">Add Employee</button>
            </div>
        </form>
    )
}

export default EmployeeForm