const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <div className="container-fluid text-center">
            <p className="footerRegistered">HRnet ® {currentYear} - All Rights Reserved</p>
        </div>
    )
}

export default Footer