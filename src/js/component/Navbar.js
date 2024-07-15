import React from 'react'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg mb-5" style={{ background: "#e2e3e5", borderBottom: "2px solid #000" }} >
            <div class="container-fluid">
                <a class="navbar-brand d-flex align-items-center w-100" href="#">
                    <img src="https://res.cloudinary.com/dyvut6idr/image/upload/v1720719412/Logo_4Geeks_Academy_qxozzt.png" alt="Logo" width="20%" height="20%" />
                    <p className="text fs-1 ms-5" >Spain-FS-PT-73</p>
                    <p className="name ms-auto" >by Jose Carlos Bertomeu</p>               
                </a>    
            </div>
        </nav>
    )
}
export default Navbar