// CardContainer.js

import React from 'react';
import HomePetCard from './HomePetCard'; // Import the Card component
import './cardcontainer.css'; // Import your CSS styles

function PetCardsContainer() {
  const pets = [
    {
      initialRotation: Math.floor(Math.random() * 60) - 30,
      initialPosition: { x: getRandomInt(-50, 50), y: getRandomInt(-50, 50) },
      image: 'src/assets/img/Home/Pet_card_1.jpg',
      bgColor: '#EADBAA',
      textColor: '#393838',
      title: 'Mateo',
      description: 'Compañero leal, mueve mucho su cola, alegre sin límites: el mejor amigo del hombre.',
    },
    {
      initialRotation: Math.floor(Math.random() * 60) - 30,
      initialPosition: { x: getRandomInt(-50, 50), y: getRandomInt(-50, 50) },
      image: 'src/assets/img/Home/Pet_card_2.jpg',
      bgColor: '#F9804F',
      textColor: 'white',
      title: 'Firulais',
      description: 'Bola peluda llena de energía, con mucho amor por dar, besos babosos, guardián leal.',
    },
    {
      initialRotation: Math.floor(Math.random() * 60) - 30,
      initialPosition: { x: getRandomInt(-50, 50), y: getRandomInt(-50, 50) },
      image: 'src/assets/img/Home/Pet_card_3.jpg',
      bgColor: '#393838',
      textColor: 'white',
      title: 'Cookie',
      description: 'As de pelo juguetón, entusiasmo contagioso, corazón leal, felicidad constante.',
    },
    {
      initialRotation: Math.floor(Math.random() * 60) - 30,
      initialPosition: { x: getRandomInt(-50, 50), y: getRandomInt(-50, 50) },
      image: 'src/assets/img/Home/Pet_card_4.jpg',
      bgColor: '#FEC7B2',
      textColor: '#393838',
      title: 'Coco',
      description: 'Confidente canino, calidez peluda, compañero juguetón, afecto incondicional.',
    },
    {
      initialRotation: Math.floor(Math.random() * 60) - 30,
      initialPosition: { x: getRandomInt(-50, 50), y: getRandomInt(-50, 50) },
      image: 'src/assets/img/Home/Pet_card_5.jpg',
      bgColor: '#930001',
      textColor: 'white',
      title: 'Max',
      description: 'Su felicidad se refleja en su cola, el miembro mas peludo de la familia, lleno de cariño para dar.',
    },
    // Add similar objects for other cards
  ];

  return (
    <div className="card-container">
      {pets.map(function (data, index) {
        return (
          <HomePetCard
            key={index}
            initialRotation={data.initialRotation}
            initialPosition={data.initialPosition}
            image={data.image}
            title={data.title}
            description={data.description}
            index={index}
            bgColor={data.bgColor}
            textColor={data.textColor}
          />
        );
      })}
    </div>
  );
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default PetCardsContainer;
