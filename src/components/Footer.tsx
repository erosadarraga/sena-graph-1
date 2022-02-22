import React from 'react'
import logoSena from "../svg/Sena_Colombia_logo 1.svg"

export const Footer = () => {
    return (

        <footer className=" text-center text-lg-start mt-4 bg-light" style={{ backgroundColor: '#23242a' }}>
            <div className="container p-2">
                <div className="row mt-2">
                    <div className="col-lg-4 col-md-12 mb-2 mb-md-0 d-flex justify-content-center align-items-center flex-column  ">

                        <img src={logoSena} className="img-fluid tex-center" alt="" />

                    </div>
                    <div className="col-lg-8 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-4 pb-1 ">Desarrolladores </h5>
                        <div className='row'>
                            <ul className='col-md-6'>
                                <li className="mb-2">
                                    <span className="fa-li"><i className="fas fa-home" /></span><span className="ms-2">Eros Adarraga</span>
                                </li>
                                <li className="mb-2">
                                    <span className="fa-li"><i className="fas fa-envelope" /></span><span className="ms-2">Kevin Cueva</span>
                                </li>
                                <li className="mb-2">
                                    <span className="fa-li"><i className="fas fa-phone" /></span><span className="ms-2">Jesus Jacquin</span>
                                </li>
                            </ul>
                            <ul className='col-md-6'>
                                <li className="mb-2 ">
                                    <span className="fa-li"><i className="fas fa-print" /></span><span className="ms-2">Santiago Viloria </span>
                                </li>
                                <li className="mb-2">
                                    <span className="fa-li"><i className="fas fa-print" /></span><span className="ms-2">Herman Gamez </span>
                                </li><li className="mb-2">
                                    <span className="fa-li"><i className="fas fa-print" /></span><span className="ms-2">Manuel Lopez </span>
                                </li></ul></div>
                        <ul className="fa-ul" >




                        </ul>
                    </div>

                </div>
            </div>
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2020 Copyright:

            </div>
        </footer>
    )
}
