import React from 'react'

function SignUpForm() {
  return (
    <>
      <main className="container max-w-full mx-auto sm:px-4">
        <section className="flex flex-wrap ">
          {/* Carrusel Perritos*/}
          <div className="relative flex-grow max-w-full flex-1 px-4 text-center hidden md:block  m-auto">
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide m-auto"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="../img/contact/Carousel/imgContact.jpeg"
                    className="imgC block w-80"
                    alt="..."
                  />
                </div>
              </div>
            </div>
            {/* <img id="imgContact" src="../img/contact/imgContact.png"
                  alt="Un perro y un gato cuyo lema es adoptame, amor, amistad" class="text-center"> */}
          </div>
          {/* Formulario */}
          <div className="relative flex-grow max-w-full flex-1 px-4 form col-style m-auto">
            <form
              id="formUser"
              className="centerForm "
              action="https://formsubmit.co/lopezrogelio020799@gmail.com"
              method="POST"
            >
              <h2 className="mb-5 mt-5 text-center text-contact">¡Únete y Adopta!</h2>
              <div className="mb-3 form-div nameUserClass">
                <p className="text-form nameUserClass">Nombre(s)*</p>
                <input
                  type="text"
                  className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                  id="nameUser"
                  placeholder="Nombre"
                  name="nombre"
                />
                {/* <label for="nameUser" class="form-label">Nombre</label> */}
              </div>
              <span
                id="errorName"
                className="flex justify-center text-red-600 nameUserClass"
              />
              <div className="mb-3 form-div nameUserClass">
                <p className="text-form nameUserClass">Apellidos*</p>
                <input
                  type="text"
                  className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                  id="nameUser"
                  placeholder="Apellidos"
                  name="nombre"
                />
                {/* <label for="nameUser" class="form-label">Nombre</label> */}
              </div>
              <span
                id="errorName"
                className="flex justify-center text-red-600 nameUserClass"
              />
              <div className="mb-3 form-div nameUserClass">
                <p className="text-form nameUserClass">Nombre de Usuario*</p>
                <input
                  type="text"
                  className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                  id="nameUser"
                  placeholder="Nombre de usuario"
                  name="nombre"
                />
                {/* <label for="nameUser" class="form-label">Nombre</label> */}
              </div>
              <span
                id="errorName"
                className="flex justify-center text-red-600 nameUserClass"
              />
              <div className="mb-3  form-div emailUserClass">
                <p className="text-form emailUserClass">Email*</p>
                <input
                  type="email"
                  className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                  id="emailUser"
                  placeholder="name@example.com"
                  name="email"
                />
                {/* <label for="emailUser" class="form-label">e-mail</label>  */}
              </div>
              <span
                id="errorEmail"
                className="flex justify-center text-red-600 emailUserClass"
              />
              <div className="flex flex-wrap ">
                <div className="relative flex-grow max-w-full flex-1 px-4">
                  <div className="mb-3 form-div passwordUserClass">
                    <p className="text-form passwordUserClass">Contraseña*</p>
                    <input
                      type="password"
                      className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                      id="emailUser"
                      placeholder="********"
                      name="email"
                    />
                    {/* <label for="emailUser" class="form-label">e-mail</label>  */}
                  </div>
                </div>
                <div className="relative flex-grow max-w-full flex-1 px-4">
                  <div className="mb-3 form-div confirmPasswordUserClass w-20">
                    <p className="text-form confirmPasswordUserClass">
                      Confirmar Contraseña*
                    </p>
                    <input
                      type="password"
                      className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                      id="emailUser"
                      placeholder="********"
                      name="email"
                    />
                    {/* <label for="emailUser" class="form-label">e-mail</label>  */}
                  </div>
                </div>
              </div>
              <div className="mb-3 form-div telUserClass">
                <p className="text-form telUserClass">Edad*</p>
                <input
                  type="number"
                  className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded "
                  id="telUser"
                  placeholder="Edad"
                  maxLength={10}
                  name="telefono"
                />
                {/* <label for="emailUser" class="form-label">e-mail</label>  */}
              </div>
              <div className="mb-3  form-div telUserClass">
                <p className="text-form telUserClass">Telefono</p>
                <input
                  type="tel"
                  className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded "
                  id="telUser"
                  placeholder="Numero de 10 digitos"
                  maxLength={10}
                  name="telefono"
                />
                {/* <label for="emailUser" class="form-label">e-mail</label>  */}
              </div>
              <span
                id="errorEmail"
                className="flex justify-center text-red-600 telUserClass"
              />
              <div className="flex flex-wrap ">
                <div className="relative flex-grow max-w-full flex-1 px-4 flex justify-center items-center">
                  <select name="stores" id="stores" className="text-center">
                    <option selected="">Selecciona Estado</option>
                    <option value="Aguascalientes">Aguascalientes</option>
                    <option value="Baja California">Baja California</option>
                    <option value="Baja California Sur">Baja California Sur</option>
                    <option value="Campeche">Campeche</option>
                    <option value="Chiapas">Chiapas</option>
                    <option value="Chihuahua">Chihuahua</option>
                    <option value="Coahuila">Coahuila</option>
                    <option value="Colima">Colima</option>
                    <option value="Durango">Durango</option>
                    <option value="Guanajuato">Guanajuato</option>
                    <option value="Guerrero">Guerrero</option>
                    <option value="Hidalgo">Hidalgo</option>
                    <option value="Jalisco">Jalisco</option>
                    <option value="Estado de México">Estado de México</option>
                    <option value="Michoacán">Michoacán</option>
                    <option value="Morelos">Morelos</option>
                    <option value="Nayarit">Nayarit</option>
                    <option value="Nuevo León">Nuevo León</option>
                    <option value="Oaxaca">Oaxaca</option>
                    <option value="Puebla">Puebla</option>
                    <option value="Querétaro">Querétaro</option>
                    <option value="Quintana Roo">Quintana Roo</option>
                    <option value="San Luis Potosí">San Luis Potosí</option>
                    <option value="Sinaloa">Sinaloa</option>
                    <option value="Sonora">Sonora</option>
                    <option value="Tabasco">Tabasco</option>
                    <option value="Tamaulipas">Tamaulipas</option>
                    <option value="Tlaxcala">Tlaxcala</option>
                    <option value="Veracruz">Veracruz</option>
                    <option value="Yucatán">Yucatán</option>
                    <option value="Zacatecas">Zacatecas</option>
                  </select>
                </div>
                <div className="relative flex-grow max-w-full flex-1 px-4">
                  <div className="mb-3 form-div confirmPasswordUserClass w-20">
                    <p className="text-form confirmPasswordUserClass">
                      Codigo Postal*
                    </p>
                    <input
                      type="password"
                      className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                      id="emailUser"
                      placeholder="Codigo"
                      name="email"
                    />
                    {/* <label for="emailUser" class="form-label">e-mail</label>  */}
                  </div>
                </div>
              </div>
              <div className="mx-auto mt-5 text-center">
                <button
                  id="buttonContact"
                  type="button"
                  className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline rounded-5"
                >
                  Registrate
                </button>
              </div>
              <p className="text-center tienesCuenta">¿Ya tienes cuenta?</p>
              <a
                className="loginlink text-center flex justify-center mb-4"
                href="./logIn.html"
              >
                Inicia Sesion
              </a>
              <div className="flex flex-wrap  mb-0">
                <div className="relative flex-grow max-w-full flex-1 px-4 flex justify-center items-center">
                  <a className="flex justify-center items-center" href="#">
                    <img
                      className="fbImage"
                      src="../img/logos/facebook.png"
                      alt="Logo Facebook"
                    />
                  </a>
                </div>
                <div className="relative flex-grow max-w-full flex-1 px-4 flex justify-center items-center">
                  <a className="flex justify-center items-center" href="#">
                    <img
                      className="goImage"
                      src="../img/logos/google.png"
                      alt="Logo Google"
                    />
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap  mb-5">
                <div className="relative flex-grow max-w-full flex-1 px-4 flex justify-center items-center">
                  <a className="fbImage" href="#">
                    Facebook
                  </a>
                </div>
                <div className="relative flex-grow max-w-full flex-1 px-4 flex justify-center items-center">
                  <a className="goImage" href="#">
                    Google
                  </a>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>


    </>
  )
}

export default SignUpForm;