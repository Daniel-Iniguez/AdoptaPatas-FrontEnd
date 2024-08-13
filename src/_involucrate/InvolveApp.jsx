import HeaderApp from "./Components/HeaderApp";
import "./InvolveApp.css";
import TextApp from "./Components/TextApp";
import ImgApp from "./Components/ImgApp";
import ButtonApp from "../_contact/components/ButtonApp";
import {useNavigate} from 'react-router-dom'

const InvolveApp = () => {

    const navigate = useNavigate();

    const toRegisterPage = () => {
        navigate('/contact');
    }

  return (
    <main className="bg-main-bg-color ">
        <HeaderApp
            txt="Involúcrate y Adopta Una Mascota"
        />
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 gap-2 mx-auto mb-5">
            <div className="col-span-3 ml-5 me-5">
                <TextApp />
            </div>
            <div className=" hidden md:block col-span-2 my-auto">
                <ImgApp />
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