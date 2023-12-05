import '../styles/Contact.css'

export const Contact = () => {
    return (
        <main className="container-fluid">
            <section className="row">
                {/* Carrusel Perritos*/}
                <div className="col text-center mx-auto d-none d-md-block  m-auto">
                    <div
                        id="carouselExampleSlidesOnly"
                        className="carousel slide m-auto"
                        data-bs-ride="carousel"
                    >
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img
                                    src="../img/contact/Carousel/imgContact.jpeg"
                                    className="imgC d-block w-80"
                                    alt="..."
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="../img/contact/Carousel/imgContact(2).jpeg"
                                    className="imgC d-block w-80"
                                    alt="..."
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="../img/contact/Carousel/imgContact(3).jpeg"
                                    className="imgC d-block w-80"
                                    alt="..."
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="../img/contact/Carousel/imgContact(4).jpeg"
                                    className="imgC d-block w-80"
                                    alt="..."
                                />
                            </div>
                        </div>
                    </div>
                    {/* <img id="imgContact" src="../img/contact/imgContact.png"
              alt="Un perro y un gato cuyo lema es adoptame, amor, amistad" class="text-center"> */}
                </div>
                {/* Formulario */}
                <div className="col form col-style m-auto">
                    <form
                        id="formUser"
                        className="centerForm "
                        action="https://formsubmit.co/lopezrogelio020799@gmail.com"
                        method="POST"
                    >
                        <h2 className="mb-5 text-center text-contact">Contacto</h2>
                        <div className="mb-3 form-div nameUserClass">
                            <p className="text-form nameUserClass">Nombre</p>
                            <input
                                type="text"
                                className="form-control"
                                id="nameUser"
                                placeholder="Nombre Apellido(s)"
                                name="nombre"
                            />
                            {/* <label for="nameUser" class="form-label">Nombre</label> */}
                        </div>
                        <span
                            id="errorName"
                            className="d-flex justify-content-center text-danger nameUserClass"
                        />
                        <div className="mb-3  form-div emailUserClass">
                            <p className="text-form emailUserClass">Email</p>
                            <input
                                type="email"
                                className="form-control"
                                id="emailUser"
                                placeholder="name@example.com"
                                name="email"
                            />
                            {/* <label for="emailUser" class="form-label">e-mail</label>  */}
                        </div>
                        <span
                            id="errorEmail"
                            className="d-flex justify-content-center text-danger emailUserClass"
                        />
                        <div className="mb-3  form-div telUserClass">
                            <p className="text-form telUserClass">Telefono</p>
                            <input
                                type="tel"
                                className="form-control "
                                id="telUser"
                                placeholder="Numero de 10 digitos"
                                maxLength={10}
                                name="telefono"
                            />
                            {/* <label for="emailUser" class="form-label">e-mail</label>  */}
                        </div>
                        <span
                            id="errorEmail"
                            className="d-flex justify-content-center text-danger telUserClass"
                        />
                        <div className="mb-3 form-floating form-diiv">
                            <p className="text-form">Mensaje</p>
                            <div className="col-sm-12">
                                <textarea
                                    className="form-control border border-1 border-dark form-message"
                                    id="message"
                                    rows={7}
                                    placeholder="Escribe aqui tu queja o sugerencia."
                                    name="mensaje"
                                    defaultValue={""}
                                />
                            </div>
                            {/* <label for="message" class="form-label">Mensaje</label> */}
                        </div>
                        <div className="mx-auto mt-5 text-center">
                            <button id="buttonContact" type="button" className="btn rounded-5">
                                Contáctanos
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </main>

    )
}
