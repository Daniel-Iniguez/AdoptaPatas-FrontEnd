import React, { useEffect, useRef } from 'react';
import './cardcontainer.css';

function HomePetCard({ initialRotation, initialPosition, image, title, description, bgColor, textColor, onHover, index }) {
  const cardRef = useRef(null);

  useEffect(function () {
    const card = cardRef.current;

    function handleMouseEnter() {
      card.style.transition = 'transform 0.7s ease-in-out';
      card.style.transform = 'rotate(0deg)';

      const siblings = getSiblings(card);
      siblings.forEach(function (sibling) {
        sibling.style.transition = 'transform 0.7s ease-in-out';
        sibling.style.transform = `translate(${getRandomInt(-20, 20)}px, ${getRandomInt(-20, 20)}px) rotate(${getRandomInt(-10, 10)}deg)`;
      });
    }

    function handleMouseLeave() {
      card.style.transition = 'transform 0.7s ease-in-out';
      card.style.transform = `rotate(${initialRotation}deg) translate(${initialPosition.x}px, ${initialPosition.y}px)`;

      const siblings = getSiblings(card);
      siblings.forEach(function (sibling) {
        sibling.style.transition = 'transform 0.7s ease-in-out';
        sibling.style.transform = `translate(${getRandomInt(-20, 20)}px, ${getRandomInt(-20, 20)}px) rotate(${getRandomInt(-10, 10)}deg)`;
      });
    }

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return function () {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [initialRotation, initialPosition, onHover]);

  return (
    <div
      ref={cardRef}
      style={{ backgroundColor: `${bgColor}` }}
      className="card  w-[16.5rem] block rounded-[2rem] pt-3 px-3 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 transition-colors">
      <a href="#!">
        <img
          className="rounded-3xl rounded-b-none block w-[100%] h-[11rem] object-cover"
          src={image}
          alt={title} />
      </a>
      <div className="py-6 px-2 flex flex-col items-start gap-4">
        <div className=' w-[50%] bg-white rounded-lg flex justify-center items-center'>
          <h5
            className='py-1 text-2xl text-center text-[1.05rem] font-["Open_Sans_Medium"] leading-tight text-main-text-color '>
            {title}
          </h5>
        </div>

        <div className='w-[100%] flex flex-row gap-2'>
          <p
            style={{ color: `${textColor}` }}
            className='mb-4 text-[1.05rem] leading-6 font-["Open_Sans_Regular"]'>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

function getSiblings(element) {
  const siblings = [];
  let sibling = element.parentNode.firstChild;

  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== element) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }

  return siblings;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default HomePetCard;
