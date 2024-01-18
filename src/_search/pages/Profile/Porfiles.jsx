import { useContext } from "react"
import { UserContext } from "../../../_auth/context/UserContext"
import { Avatar, Box, Button, Modal } from "@mui/material"
import { colors } from '../../../assets/MUI/Colors';
import PlaceIcon from '@mui/icons-material/Place';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export const Profiles = () => {
    const [loading, setLoading] = useState(true);
    const [userPost, setUserPost] = useState({})
    const { userPostId } = useContext(UserContext);
    // ========= Peticion Get usando api Axios =================
    const getPosts = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/adoptapatas/v1/users/${userPostId}`);
            setUserPost(response.data);
            console.log("GET Post", response.data);
        } catch (error) {
            console.log('Error al obtener detalles del post:', error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        getPosts()
    }, []);

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
                        <p className="name-text text-center text-[2rem] mt-8 mx-auto">{userPost.firstName} {userPost.lastName}</p>
                        <p className="userName-text text-center text-[1.5rem] my-0 mx-auto">@{userPost.username}</p>
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
                        <p className="text-center my-5 mx-auto">{userPost.bio}</p>
                        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mx-5 my-3">
                            <div className="col-span-2 mx-auto">
                                <p className="my-3"><PlaceIcon className="mx-2" />Ubicación: {userPost.city}</p>
                                <p className="my-3"><PhoneIcon className="mx-2" />Numero de telefono: {userPost.phone}</p>
                                <p className="my-3"><CalendarMonthIcon className="mx-2" />Edad: {userPost.age}</p>
                                <p className="my-3"><EmailIcon className="mx-2" />Email: {userPost.email}</p>
                            </div>
                            <div className="col-span-1 mx-auto">
                            </div>
                        </div>
                    </div>
                </section>
            </main>




        </>
    )
}
