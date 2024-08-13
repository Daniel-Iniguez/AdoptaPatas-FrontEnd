import { Avatar, Box, Button, Modal } from "@mui/material"
import PlaceIcon from '@mui/icons-material/Place';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import CommentIcon from '@mui/icons-material/Comment';
import { useState } from "react";
import UpdatePorfile from "./UpdateProfile.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../_auth/context/UserContext";
import { colors } from "../../../assets/MUI/Colors";

const style = {
    position: 'absolute',
    top: '10%',
    left: '25%',
    width: 400,
    pt: 2,
    px: 4,
    pb: 3,

};

export const Profile = ({ setIsLogin }) => {

    const navigate = useNavigate();
    const { usuario, setUsuario } = useContext(UserContext)

    const { setPostId } = useContext(UserContext);
    const [open, setOpen] = useState(false);

    const handlePostClick = (postId) => {
        console.log(postId);
        setPostId(postId);
        setOpen(true);
    };

    const handleDeleteAccount = async () => {
        const url = `https://adoptapatas.onrender.com/adoptapatas/v2/users/${usuario.id}`;
        try {

            const response = await axios.delete(url);
            console.log("%Usuario Eliminado", 'color: green; font-weight: bold;', response.data);
            setIsLogin([]);
            setUsuario({});
            navigate('/sign-in');
            alert("Cuenta Eliminada!")
        } catch (error) {
            console.error('Error en la solicitud de eliminación', error);
            throw error.response.data;
        }
    }

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <>

            <main className=" mx-auto  ">
                <section className="justify-center align-middle flex">
                    <div className=" w-[90%] bg-main-bg-color rounded-b-3xl shadow-md">
                        <Avatar alt='' src="src\assets\img\About-Us\DanielIñiguezz.jpeg" className="mx-auto top-24" sx={{ width: 200, height: 200, bgcolor: colors.buttonColor }}></Avatar>
                    </div>
                </section>
                <section className="justify-center align-middle flex mb-6">
                    <div className=" w-[50%] bg-first-section-color rounded-3xl mt-16 shadow-md">
                        <p className="name-text text-center text-[2rem] mt-8 mx-auto">{usuario.firstName} {usuario.lastName}</p>
                        <p className="userName-text text-center text-[1.5rem] my-0 mx-auto">@{usuario.username}</p>
                        {/* <div className=" grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 my-4">
                            <div className="w-[50%] mx-auto mt-10 border-2 rounded-[50px] border-buttonColor my-3 ">
                                <button
                                    id="buttonContact"

                                    className="cursor-pointer mx-auto text-center py-1 px-2 mb-1 text-[1.3rem] flex justify-center align-middle w-full"
                                >
                                    588 - Siguiendo
                                </button>
                            </div>
                            <div className="w-[50%] mx-auto mt-10 border-2 rounded-[50px] border-buttonColor my-3 ">
                                <button
                                    id="buttonContact"

                                    className="cursor-pointer mx-auto text-center py-1 px-2 mb-1 text-[1.3rem] flex justify-center align-middle w-full"
                                >
                                    792 - Seguidores
                                </button>
                            </div>
                        </div> */}
                        <p className="text-center my-5 mx-auto">{usuario.bio}</p>
                        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mx-5 my-3">
                            <div className="col-span-2 mx-auto">
                                <p className="my-3"><PlaceIcon className="mx-2" />Ubicación: {usuario.city}</p>
                                <p className="my-3"><PhoneIcon className="mx-2" />Numero de telefono: {usuario.phone}</p>
                                <p className="my-3"><CalendarMonthIcon className="mx-2" />Edad: {usuario.age}</p>
                                <p className="my-3"><EmailIcon className="mx-2" />Email: {usuario.email}</p>
                            </div>
                            <div className="col-span-1 mx-auto">
                            </div>
                        </div>
                        <div className="w-[25%] mx-auto mt-10 border-2 rounded-[50px] border-buttonColor bg-buttonColor hover:bg-main-text-color  text-white my-3 ">
                            <div>
                                <button
                                    id="buttonContact"
                                    onClick={() => handlePostClick(1)}
                                    className="cursor-pointer mx-auto text-center py-1 px-2 mb-1 text-[1.3rem] flex justify-center align-middle w-full"
                                >
                                    Actualizar información
                                </button>

                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="parent-modal-title"
                                    aria-describedby="parent-modal-description"
                                >
                                    <Box sx={{ ...style, minWidth: '50%', maxHeight: '50%' }}>
                                        <UpdatePorfile></UpdatePorfile>
                                    </Box>
                                </Modal>
                            </div>

                        </div>
                        <button
                            id="buttonContact"
                            onClick={handleDeleteAccount}
                            className="cursor-pointer mx-auto text-center py-1 px-2 mb-1 text-[1.3rem] flex justify-center align-middle w-full text-red-500"
                        >
                            Eliminar cuenta
                        </button>
                    </div>
                </section>
            </main>




        </>
    )
}