import ParagraphApp from "./ParagraphApp";
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import { useEffect, useState } from "react";

const InformationApp = () => {

    const [put,setPut] = useState(false);

    useEffect(() => setPut(true));

    const sx = {
        textAlign: "justify",
        marginLeft: {
            lg: 25,
            md: 20,
            sm: 10,
            xs: 5
        },
        marginRight: {
            lg: 25,
            md: 20,
            sm: 10,
            xs: 5
        },
        paddingBottom: 5
    }

    const txts = [
        "El adoptado será un miembro más de tu familia.",
        "El adoptado tendrá en todo momento agua, alimento y mucho amor",
        "El adoptado tendrá placa de identificación y la portará en todo momento",
        "Al adoptado se le sacará a pasear siempre con correa.",
        "El adoptado no será en ningún caso maltratado físicamente, abandonado o regalado.",
        "El adoptado recibirá los cuidados médicos necesarios para su bienestar.",
        "En caso de que el adoptante no pueda continuar con la responsabilidad sobre el adoptado, este deberá de comunicarlo al refugio o a la misma plataforma.",
        "En caso de que el adoptante cambie su domicilio y/o número telefónico, esta información debe de ser actualizada en la plataforma a la brevedad",
        "El adoptante se compromete a esterilizar al adoptado en caso de ser necesario, entendiéndose a esta como una medida de prevención ante la actual sobrepoblación de perros y gatos callejeros."
    ];

    return (
        <Box sx={sx}>
            {txts.map((txt,index) => 
                <Collapse orientation="horizontal" in={put} key={index}>
                    <ParagraphApp txt={(index+1) + ". " + txt} />
                </Collapse>    
            )}
        </Box>
    )
}

export default InformationApp