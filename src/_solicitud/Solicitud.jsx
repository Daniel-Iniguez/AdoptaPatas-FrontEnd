import ButtonApp from '../_contact/components/ButtonApp';
import HeaderApp from '../_involucrate/Components/HeaderApp';
import InformationApp from './Components/InformationApp';
import {useNavigate} from 'react-router-dom';
import './Solicitud.css';

const Solicitud = () => {

    const navigate = useNavigate();

    const continueSolicitud = () => {
        navigate('/formSolicitud');
    }

    return (
        <main className="bg-main-bg-color ">
            <HeaderApp txt="Antes de Adoptar, ¡Lee la siguiente Información!"/>
            <InformationApp />
            <ButtonApp 
                title="Continuar Solicitud"
                id="btnContinue"
                type="button"
                onClick={continueSolicitud}
            />
        </main>
    )
}

export default Solicitud