import React from 'react'
import logo from "../svg/undraw_handcrafts_welcome.svg"
import logosec from "../svg/undraw_handcrafts_growing.svg"

export const Navbar = () => {
    return (
        < >
            <nav className="navbar navbar-light bg-light mb-4" style={{ backgroundColor: "#e3f2fd " }}>

                <div className=" container-fluid d-flex justify-content-around">

                    <a className="p-2  navbar-brand  font-monospace fst-italic" href="#">
                        <img src={logo} alt="" width="100" height="24" className="d-inline-block align-text-top " />
                        Sena
                    </a>
                    <div className='p-2 text-center fs-3 font-monospace fst-italic'>Proyecto boya sena</div>
                    <a className="p-2  navbar-brand" href="#">
                        <img src={logosec}  alt="" width="120" height="44" className="d-inline-block align-text-top" />

                    </a>
                </div>
            </nav>

        </ >


    )
}
