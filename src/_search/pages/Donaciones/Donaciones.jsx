import React from 'react'
import LogoFondo from "../../../assets/img/logos/logo_v3.png"
import './Donaciones.css'

function Donaciones() {
    return (
        <>
            <div className=''>
            <section className="bg-main-bg-color text-center max-h-[60vh] overflow-hidden">
                    <h2 className="titulo text-[6rem] text-main-text-color mt-20 relative z-10 mb-5 hover:text-[7rem]">
                        Donaciones
                    </h2>
                    
                    <section className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1  ">
                        <div className=' col-span-1 hidden md:block'>
                            <img src="src\assets\img\header\AboutUs3.png" alt="" className="max-w-[20%] min-h-[100%] mx-auto object-cover  relative z-10 hover:bottom-3 " />
                        </div>
                        <img src="src\assets\img\vectors\SVG\Vector2.svg" alt="" className="max-w-[36%] top-[15%] left-[55%] absolute z-0 hidden lg:block hover:min-w-[40%] hover:top-[10%]" />
                        <img src="src\assets\img\vectors\SVG\Vector1.svg" alt="" className="max-w-[32%]  top-[20%] left-[5%] absolute z-0 hidden lg:block hover:max-w-[35%]" />
                        
                    </section>
                </section>
                <div className="text-center p-6 m-4   ">

                    <p className='texto sm:text-lg md:text-xl lg:text-2xl xl:text-3xl relative -z-0'>¡Haz la diferencia hoy!
                        Con tu apoyo, AdoptaPatas puede seguir conectando mascotas adorables con hogares llenos de amor.
                        Tu donación ayuda a cubrir necesidades esenciales, haciendo posible que más animales encuentren un hogar feliz.
                        Únete a nuestra misión de cuidado y compasión.
                        ¡Dona ahora y sé parte de la alegría de hacer familias peludas felices!</p>

                </div>

                {/* Botón de donación demostrativo */}
                <div className="mb-10 mt-8 mx-auto text-center">
                    <form action="https://www.paypal.com/donate" method="post" target="_blank">
                        <input type="hidden" name="business" value="danielig9@outlook.com" />
                        <input type="hidden" name="item_name" value="Donaciones AdoptaPatas" />
                        <input type="hidden" name="currency_code" value="MXN" />
                        <input type="image" src="https://newsroom.latam.paypal-corp.com/images/fillers/Wordmark%20on%20gold.png" className='rounded-sm bg-p w-40' name="submit" title="PayPal - ¡Haz tu donación!" alt="Donar con PayPal" />
                        <h1 className='titulo mt-4 text-[2rem]'>Donar con PayPal</h1>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Donaciones