import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { EffectCards } from 'swiper/modules';
import { Mousewheel, Pagination, Navigation } from 'swiper/modules';

export const AboutUs_Carousel = () => {



    return (
        <>

            <Swiper     
                loop={true}
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards, Mousewheel, Pagination]}
                mousewheel={true}
                pagination={{
                    clickable: true,
                }}
                className="mySwiper"
            >
                <SwiperSlide className='bg-secondary2-bg-color text-center'>
                    <img src="src\assets\img\About-Us\IzcoGuerrero.JPG" alt="" className='opacity-100 w-[80%] h-[60%] object-cover rounded-[20%] relative mx-auto mb-2 ' />
                    <span className="slider_code text-[#7b7992] ">Front-End y Back-End</span>
                    <div className="slider_title text-[24px] text-black my-1">Izcoatl Guerrero Leon</div>
                    <div className="slider_text text-[#4e4a67]">
                        Desarrollador Front-End altamente motivado y orientado a los
                        detalles para la creación de aplicaciones web dinámicas y
                        receptivas. Dedicado y orientado a la eficiencia y el
                        aprendizaje de nuevas habilidades
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-secondary2-bg-color text-center'>
                    <img src="src\assets\img\About-Us\JanettVargas.png" alt="" className='opacity-100 w-[80%] h-[60%] object-cover rounded-[20%] relative mx-auto mb-2 ' />
                    <span className="slider_code text-[#7b7992] ">Back-End</span>
                    <div className="slider_title text-[24px] text-black my-1">Janett Venegas</div>
                    <div className="slider_text text-[#4e4a67]">
                        Desarrolladora enfocada en las tecnologías emergentes para
                        abordar desafíos y aportar mejoras en proyectos del área.
                        Entusiasmada de ser parte del equipo de AdoptaPatas!
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-secondary2-bg-color text-center'>
                    <img src="src\assets\img\About-Us\GeoFlores.png" alt="" className='opacity-100 w-[80%] h-[60%] object-cover rounded-[20%] relative mx-auto mb-2 ' />
                    <span className="slider_code text-[#7b7992] ">Back-End</span>
                    <div className="slider_title text-[24px] text-black my-1">Geo Flores</div>
                    <div className="slider_text text-[#4e4a67]">
                        Programadora con conocimientos en aspectos básicos de diseño
                        de UX, JavaScript, GIT y GitHub. Apasionada del aprendizaje
                        continuo, la orientación al detalle y persistencia.
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-secondary2-bg-color text-center'>
                    <img src="src\assets\img\About-Us\DanielIñiguez.jpeg" alt="" className='opacity-100 w-[80%] h-[60%] object-cover rounded-[20%] relative mx-auto mb-2 ' />
                    <span className="slider_code text-[#7b7992] ">Front-End y Back-End</span>
                    <div className="slider_title text-[24px] text-black my-1">Daniel Iñiguez</div>
                    <div className="slider_text text-[#4e4a67]">
                        Ingeniero en Mecatrónica con pasión en la programación y en
                        el desarrollo de páginas web tanto en el área del Front-End
                        como en el Back-End. Dispuesto a aprender constantemente
                        cosas nuevas para poder crecer personal y profesionalmente.
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-secondary2-bg-color text-center'>
                    <img src="src\assets\img\About-Us\MonserratSilva.jpeg" alt="" className='opacity-100 w-[80%] h-[60%] object-cover rounded-[20%] relative mx-auto mb-2 ' />
                    <span className="slider_code text-[#7b7992] ">Front-End</span>
                    <div className="slider_title text-[24px] text-black my-1">Monserrat Silva</div>
                    <div className="slider_text text-[#4e4a67]">
                        Lic. en Psicología con experiencia como Especialista de
                        Recursos Humanos, con conocimientos en programación y
                        análisis de datos. Siempre con enfoque al diseño,
                        implementación y seguimiento para la mejora continua en cada
                        proyecto.
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-secondary2-bg-color text-center'>
                    <img src="src\assets\img\About-Us\RogelioLopez.jpg" alt="" className='opacity-100 w-[80%] h-[60%] object-cover rounded-[20%] relative mx-auto mb-2 ' />
                    <span className="slider_code text-[#7b7992] ">Front-End</span>
                    <div className="slider_title text-[24px] text-black my-1">Rogelio Lopez</div>
                    <div className="slider_text text-[#4e4a67]">
                        Apasionado por la industria de la tecnología y como sus
                        avances han permitido mejorar la calidad de vida de millones
                        de personas. Mi enfoque actual se ubica principalmente en
                        trabajar y proporcionar mejores perspectivas en el área,
                        aplicando mis conocimientos de las ciencias
                        físico-matemáticas en el desarrollo web.
                    </div>
                </SwiperSlide>

            </Swiper>

        </>

    );
};
