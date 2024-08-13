import Typography from '@mui/material/Typography';


const TextApp = () => {

    const txt1 = "¡Hola!  ¿Te has planteado la posibilidad de darle un hogar a un amigo peludo?";
    const txt2 = "Los perros y los gatos son amigos leales que están contigo en los buenos y malos momentos. Además de su apoyo incondicional, tener una mascota puede tener impactos positivos en tu salud mental y física. Ya sea paseando un perro, jugando con un gato o simplemente tener una compañía afectuosa puede mejorar tu bienestar.";
    const txt3 = "Cuidar de una mascota va más allá de la simple compañia. Implica asumir responsabilidades, desarrollar empatía y tener disciplina. Es una experiencia enriquecedora que no solo beneficia al animal, sino también al adoptante.";
    const txt4 = "En AdoptaPatas, ofrecemos la oportunidad tanto a usuarios individuales como a organizaciones de encontrar a su compañero. Independientemente de sí eres un individuo buscando un amigo o una organización interesada en darle hogar a una mascota, el primer paso es registrarse. ¡Únete a nuestra comunidad y haz una diferencia en la vida de estos seres!.";
    const txt5 = 'Si ya te has registrado de manera satisfactoria, podrás dirigirte al panel de "Adoptar" en este lugar podrás encontrar a usuarios y organizaciones que están en la disposición de dar en adopción AdoptaPatas te mostrará los elementos que estén más cerca de tu ubicación.';
    const txt6 = "El sitio solo está enfocado en la adopción de perros y gatos, por lo que ten en cuenta si es lo que buscas. ";

    const txts = [txt1,txt2,txt3,txt4,txt5,txt6];

    const sx = {
        py: 5,
        textAlign: 'center',
        fontSize: {
            lg: 20,
            md: 18,
            sm: 15,
            xs: 12
        },
    }

    return (
        <div>
            {txts.map(txt => 
                <>
                <Typography sx={sx} variant='p'>{txt}</Typography>
                <br/>
                <br/>
                </>
            )}
        </div>
    )
}

export default TextApp