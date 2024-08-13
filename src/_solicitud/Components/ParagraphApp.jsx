import Typography from '@mui/material/Typography';

const ParagraphApp = ({txt}) => {

    const sx = {
        fontSize: {
            lg: 25,
            md: 22,
            sm: 20,
            xs: 17
        }
    }

    return (
        <Typography sx={sx}>{txt}</Typography>
    )
}

export default ParagraphApp