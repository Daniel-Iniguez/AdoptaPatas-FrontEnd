import { Link } from 'react-router-dom'
import '../styles/Footer.css'

export const Footer = () => {
    return (
        <footer className="bg-dark text-white">
            <div className="container">
                <div className="row custom-padding-row">
                    <div className="col-md-6 col-lg-6 text-md-left d-flex flex-column left-container">
                        <Link className="a-link" href="/index.html">
                            <img id="footer-logo" src="../img/logos/SVG/Logo-Footer.svg" alt="" />
                        </Link>
                        <Link className="a-link" to='/contact'>
                            <h4>Contacto: </h4>contacto.adoptapatas@gmail.com
                        </Link>
                        <Link className="a-link" to='/about-us'>
                            Acerca De Nosotros
                        </Link>
                        <p className="custom-align mb-4">
                            @ Copyright 2023 AdoptaPatas. Todos los derechos reservados
                        </p>
                    </div>
                    <div className="col-md-6 col-lg-6 text-md-end d-flex flex-column right-container">
                        <Link className="a-link" to='/asked-questions'>
                            Preguntas Frecuentes
                        </Link>
                        <Link className="a-link" to='/involucrate'>
                            Centro de Información
                        </Link>
                        <Link className="a-link" to='/donations'>
                            Apoya este proyecto
                        </Link>
                        <Link className="a-link" to='/adopt'>
                            Encuentra una mascota
                        </Link>
                        <ul className="list-unstyled list-inline float-end">
                            <li className="list-inline-item">
                                <a
                                    href=""
                                    className="btn-floating btn-sm text-white"
                                    style={{ fontSize: 23 }}
                                >
                                    <i className="fab fa-facebook" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a
                                    href=""
                                    className="btn-floating btn-sm text-white"
                                    style={{ fontSize: 23 }}
                                >
                                    <i className="fab fa-instagram" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a
                                    href=""
                                    className="btn-floating btn-sm text-white"
                                    style={{ fontSize: 23 }}
                                >
                                    <i className="fab fa-twitter" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    )
}
