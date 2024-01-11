import React from 'react'
import LogoFondo from "../../../assets/img/logos/logo_v3.png"
import './Donaciones.css'

function Donaciones() {
    return (
        <div>
            <div className="contenedor  mx-auto bg-pink p-6  ">
                <div className="text-center p-6 m-2  ">
                    <h1 className="titulo text-3xl">Donaciones</h1>
                </div>
                <div className="text-center p-6 m-4   ">
                <img className='w-[12rem] absolute top-40 left-10 z-1' id="fondo-logo" src={LogoFondo} alt="Huellas de Fondo" />
                    <p className='texto sm:text-lg md:text-xl lg:text-2xl xl:text-3xl relative -z-0'>¡Haz la diferencia hoy!
                        Con tu apoyo, AdoptaPatas puede seguir conectando mascotas adorables con hogares llenos de amor.
                        Tu donación ayuda a cubrir necesidades esenciales, haciendo posible que más animales encuentren un hogar feliz.
                        Únete a nuestra misión de cuidado y compasión.
                        ¡Dona ahora y sé parte de la alegría de hacer familias peludas felices!</p>

                </div>

                {/* Botón de donación demostrativo */}
                <div className="mb-10 mt-4 mx-auto text-center">
                    <form action="https://www.paypal.com/donate" method="post" target="_blank">
                        <input type="hidden" name="business" value="LALONGANIS@GMAIL.COM" />
                        <input type="hidden" name="item_name" value="Donaciones AdoptaPatas" />
                        <input type="hidden" name="currency_code" value="MXN" />
                        <input type="image" src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/pp-acceptance-large.png" border="0" name="submit" title="PayPal - ¡Haz tu donación!" alt="Donar con PayPal" />
                        <h1 className='titulo mt-0'>Donar con PayPal</h1>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Donaciones