type ModalProps = {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
}

// TODO: use as a plugin and mention it's openclassroom

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    if (!isOpen) return null

    return (
        <div className="modal-overlay">
            <div className="modal-box">
                <button className="modal-close" onClick={onClose}>
                    x
                </button>
                {children}
            </div>
        </div>
    )
}

export default Modal