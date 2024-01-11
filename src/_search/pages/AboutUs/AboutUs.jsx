import './about-us.css'
import { AboutUs_Carousel } from './AboutUs_Carousel';




export const AboutUs = () => {

    return (
        <>

            <main className='bg-first-section-color'>
                <section className="bg-main-bg-color text-center max-h-[60vh] overflow-hidden">
                    <h2 id="text-aboutUs" className="text-[4.5rem] text-main-text-color mt-20 relative z-10 mb-5 hover:text-[5rem]">
                        Adopción Responsable
                    </h2>
                    <section className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3  ">

                        <div className='hidden lg:block'>
                            <img src="src\assets\img\header\AboutUs2.png" alt="" className="max-w-[55%] min-h-[100%] object-cover right-[-40%]  relative z-10 hover:bottom-3 " />
                        </div>
                        <div className='mx-auto'>
                            <img src="src\assets\img\header\AboutUs1.png" alt="" className="max-w-[90%] min-h-[100%] object-cover mx-auto relative z-20 hover:bottom-3" />
                        </div>
                        <div className='hidden lg:block'>
                            <img src="src\assets\img\header\AboutUs3.png" alt="" className="max-w-[75%] min-h-[100%] object-cover left-[-1%] relative z-10 hover:bottom-3" />
                        </div>
                        <img src="src\assets\img\vectors\SVG\Vector2.svg" alt="" className="max-w-[32%]  top-[20%] left-[1%] absolute z-0 hidden md:block hover:max-w-[35%]" />
                        <img src="src\assets\img\vectors\SVG\Vector1.svg" alt="" className="min-w-[30%] top-[15%] left-[58%] absolute z-0 hidden lg:block hover:min-w-[45%] hover:top-[10%]" />
                    </section>
                </section>

                <section className="nosotros-seccion grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 mt-20">

                    <div className='text-main-text-color my-auto'>
                        <p className="title-font text-center text-[3.3rem]">Quienes somos?</p>
                    </div>
                    <div className='text-text-color flex align-middle justify-center my-20'>
                        <p className="secondary-text text-[1.2rem] w-[60%]">
                            Somos una red social mexicana enfocada en la gestión de procesos de adopción responsables y accesibles para cualquier persona que quiera darle un hogar a un perrito o gatito en situación de calle.
                        </p>
                    </div>
                    <div className='text-main-text-color my-auto'>
                        <p className="title-font text-center text-[3.3rem]">Misión
                        </p>
                    </div>
                    <div className='text-text-color flex align-middle justify-center my-20'>
                        <p className="secondary-text text-[1.2rem] w-[60%]">
                            Buscamos crear un espacio virtual donde las personas puedan encontrar información, detallada y precisa, sobre animales en rescate disponibles para adopción. Reduciendo la población de mascotas abandonadas o en situación de calle.
                        </p>
                    </div>
                    <div className='text-main-text-color my-20'>
                        <p className="title-font text-center text-[3.3rem]">Visión
                        </p>
                    </div>
                    <div className='text-text-color flex align-middle justify-center my-20'>
                        <p className="secondary-text text-[1.2rem] w-[60%]">
                            Deseamos ser una plataforma líder en adopciones de mascotas, ofreciendo no solo un proceso fácil de adopción y transparente, sino también en educación continua sobre la responsabilidad de tener una mascota.
                        </p>
                    </div>
                </section>

                <section id='nuestro-equipo' >
                    <h2 id="text-aboutUs" className="text-[4rem] text-center text-main-text-color mt-20 relative z-10">
                        Conoce a nuestro equipo.
                    </h2>

                    <section className='my-10'>
                        <AboutUs_Carousel></AboutUs_Carousel>
                    </section>
                </section>
                .
            </main>
        </>
    )
}
