import { useState } from "react"
import { SimpleModal } from "azzeddine-modal"
import EmployeeForm from "../../components/form"
import EmployeeSuccessModalContent from "../../components/modal/child"
// @ts-ignore
import bgImage from '../../assets/images/466.webp'

const HomePage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [newlyAddedEmployee, setNewlyAddedEmployee] = useState<{ firstName: string, lastName: string } | null>(null)

    const handleEmployeeAdded = (firstName: string, lastName: string) => {
        setNewlyAddedEmployee({ firstName, lastName })
        setIsModalOpen(true)
    }

    return (
        <>
            <title>HRnet - Add New Employee</title>

            <section>
                <div className="imgCol" style={{ backgroundImage: `url(${bgImage})` }}>
                    <div className="formCol col-5 col-md-8 col-sm-12">
                        <h1 className="title">Add an employee to <span>HRnet</span></h1>
                        <EmployeeForm onSuccess={handleEmployeeAdded} />
                    </div>
                </div>
            </section>

            {/* Here new modal package */}
            <SimpleModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                {newlyAddedEmployee && (
                    <EmployeeSuccessModalContent
                        firstName={newlyAddedEmployee.firstName}
                        lastName={newlyAddedEmployee.lastName}
                    />
                )}
            </SimpleModal>

        </>
    )
}

export default HomePage
