import React from 'react'
import HomeUserCard from './HomeUserCard';

function UserCardContainer() {
  const homePageUsers = [
    {
      image: "https://img.freepik.com/free-photo/close-up-shot-pretty-woman-with-perfect-teeth-dark-clean-skin-having-rest-indoors-smiling-happily-after-received-good-positive-news_273609-1248.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703030400&semt=sph",
      name: 'Bonnie Green',
      review: '¡Increíble experiencia! Gracias a esta red social de adopción de mascotas, encontré a mi mejor amigo de cuatro patas. El proceso fue sencillo, la comunidad es amigable y solidaria ¡Altamente recomendado para quienes buscan dar un hogar amoroso a una mascota necesitada!'
    },
    {
      image: "https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg",
      name: 'Amanda Bowen',
      review: 'Excelente iniciativa. Adoptar a través de esta red social fue una decisión que cambió mi vida. El sitio es intuitivo y la comunidad es cálida y siempre dispuesta a brindar apoyo. Si estás pensando en adoptar, definitivamente deberías explorar esta plataforma.'
    },
    {
      image: "https://img.freepik.com/free-photo/latin-man-smiling-mockup-psd-cheerful-expression-closeup-portrai_53876-145665.jpg",
      name: 'Enrique Benevide',
      review: 'Una experiencia maravillosa de principio a fin. Esta red social de adopción de mascotas superó mis expectativas. Encontré a mi perro ideal con facilidad. La comunidad es solidaria y llena de amantes de los animales ¡Gracias por hacer posible esta conexión tan especial!'
    },
  ];

  return (
    <div className="container w-[100%] flex flex-row justify-between px-14">
      {homePageUsers.map(function (data, index) {
        return (
          <HomeUserCard
            key={index}
            image={data.image}
            name={data.name}
            review={data.review}
          />
        );
      })}
    </div>
  )
}

export default UserCardContainer