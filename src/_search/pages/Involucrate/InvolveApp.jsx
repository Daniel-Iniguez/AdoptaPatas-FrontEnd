import "./InvolveApp.css";
import ButtonApp from "../../../_contact/components/ButtonApp";
import { useNavigate } from 'react-router-dom'

const InvolveApp = ({isLogin}) => {

    const navigate = useNavigate();

    const toRegisterPage = () => {
        if (isLogin.length > 0) {
            navigate('/');
        }else{
            navigate('/sign-up');
        }
        
    }

    return (
        <main className="">
            <section className="bg-main-bg-color text-center max-h-[60vh] overflow-hidden">
                <h2 className="titulo-inv text-[6rem] text-main-text-color mt-20 relative z-10 mb-5 hover:text-[7rem]">
                    Involucrate y Adopta Una Mascota
                </h2>

                <section className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1  ">
                    <div className=' col-span-1 hidden md:block'>
                        <img src="src\assets\img\header\AboutUs2.png" alt="" className="max-w-[21%] min-h-[100%] mx-auto object-cover  relative z-10 hover:bottom-3 " />
                    </div>
                    <img src="src\assets\img\vectors\SVG\Vector1.svg" alt="" className="max-w-[36%] top-[15%] left-[55%] absolute z-0 hidden lg:block hover:min-w-[40%] hover:top-[10%]" />
                    <img src="src\assets\img\vectors\SVG\Vector2.svg" alt="" className="max-w-[32%]  top-[20%] left-[5%] absolute z-0 hidden lg:block hover:max-w-[35%]" />

                </section>
            </section>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-2 mx-auto mb-5 text-[1.5rem]">
                <div className="desc-inv col-span-2 ml-5 me-5 text-[1.7rem] text-center my-10">
                    <p className="">¡Hola!  ¿Te has planteado la posibilidad de darle un hogar a un amigo peludo?</p>

                </div>
                <div className="desc-inv col-span-1 ml-10 my-2">
                    <p className="my-5">Los perros y los gatos son amigos leales que están contigo en los buenos y malos momentos. Además de su apoyo incondicional, tener una mascota puede tener impactos positivos en tu salud mental y física. Ya sea paseando un perro, jugando con un gato o simplemente tener una compañía afectuosa puede mejorar tu bienestar.</p>
                    <p className="mb-5">Cuidar de una mascota va más allá de la simple compañia. Implica asumir responsabilidades, desarrollar empatía y tener disciplina. Es una experiencia enriquecedora que no solo beneficia al animal, sino también al adoptante.</p>
                    <p className="mb-5">En AdoptaPatas, ofrecemos la oportunidad tanto a usuarios individuales como a organizaciones de encontrar a su compañero. Independientemente de sí eres un individuo buscando un amigo o una organización interesada en darle hogar a una mascota, el primer paso es registrarse. ¡Únete a nuestra comunidad y haz una diferencia en la vida de estos seres!.</p>
                    <p className="my-5">Si ya te has registrado de manera satisfactoria, podrás dirigirte al panel de "Adoptar" en este lugar podrás encontrar a usuarios y organizaciones que están en la disposición de dar en adopción AdoptaPatas te mostrará los elementos que estén más cerca de tu ubicación.'</p>
                </div>
                <div className="desc-inv col-span-1 ml-5 me-5 mx-auto my-auto">
                    <img src="src\_search\pages\Involucrate\Components\logo_v1.png" alt="" className="mx-auto" />
                </div>

            </div>
            <ButtonApp
                title="Regístrate"
                id="buttonRegister"
                type="button"
                onClick={toRegisterPage}
            />
        </main>
    )
}

export default InvolveApp