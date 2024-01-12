import { useContext } from "react"
import { UserContext } from "../../_auth/context/UserContext"
import { Avatar, Button } from "@mui/material"
import { colors } from '../../assets/MUI/Colors';
import PlaceIcon from '@mui/icons-material/Place';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

export const Porfile = () => {
    const { usuario } = useContext(UserContext)
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
                        <div className=" grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 my-4">
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
                        </div>
                        <p className="text-center my-5 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, suscipit! Officia voluptates natus architecto ex molestias doloribus, eum autem omnis nihil debitis rem, nam molestiae maxime explicabo repellat, odio animi.</p>
                        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mx-5 my-3">
                            <div className="col-span-2 ">
                                <p className="my-3"><PlaceIcon className="mx-2" />Ubicación: {usuario.city}</p>
                                <p className="my-3"><PhoneIcon className="mx-2" />Numero de telefono: {usuario.phone}</p>
                                <p className="my-3"><CalendarMonthIcon className="mx-2" />Edad: {usuario.age}</p>
                                <p className="my-3"><EmailIcon className="mx-2" />Email: {usuario.email}</p>

                            </div>
                            <div className="col-span-1 mx-auto">

                            </div>
                        </div>

                        <div className="w-[25%] mx-auto mt-10 border-2 rounded-[50px] border-buttonColor bg-buttonColor hover:bg-main-text-color  text-white my-3 ">
                            <button
                                id="buttonContact"

                                className="cursor-pointer mx-auto text-center py-1 px-2 mb-1 text-[1.3rem] flex justify-center align-middle w-full"
                            >
                                Actualizar información
                            </button>
                        </div>
                    </div>
                </section>


            </main>




        </>
    )
}
