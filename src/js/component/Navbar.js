import React from 'react'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg mb-5" style={{ background: "#e2e3e5", borderBottom: "2px solid #000" }} >
            <div class="container-fluid">
                <a class="navbar-brand d-flex align-items-center w-100 justify-content-around" href="#">
                    <img src="https://res.cloudinary.com/dyvut6idr/image/upload/v1720719412/Logo_4Geeks_Academy_qxozzt.png" alt="Logo" className="img-fluid" style={{ maxWidth: "20%", height: "auto" }} />
                    <div className="ms-5">
                        <p className="text fs-1 fs-md-3 mb-0">Spain-FS-PT-73</p>
                        <p className="text fs-3 fs-md-3 mb-0">by Jose Carlos Bertomeu</p>
                    </div>                
                </a>    
            </div>
        </nav>
    )
}
export default Navbar