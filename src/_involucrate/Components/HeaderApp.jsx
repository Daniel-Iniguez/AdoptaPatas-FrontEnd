import Typography from '@mui/material/Typography';


const HeaderApp = ({ txt }) => {

    const sxTypography = {
        py: 5,
        textAlign: 'center',
        fontSize: {
            lg: 55,
            md: 40,
            sm: 30,
            xs: 20
        },
        fontWeight: 500,
    }


    return (
        <Typography sx={sxTypography}>{txt}</Typography>
    )
}

export default HeaderApp