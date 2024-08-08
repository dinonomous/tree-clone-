import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import '../css/firstpage.css'; // Updated CSS file name

gsap.registerPlugin(ScrollTrigger);


const RandomFlippingCards = () => {

    const cards = [
        {
          frontImage: 'https://unsplash.it/500/500/',
          backText: 'link.tree.',
          width: '600px',
          borderRadius: '100px',
          backColor: '#ff6347' // Custom background color for this card
        },
        {
          frontImage: 'https://unsplash.it/511/511/',
          backText: 'link.tree.',
          width: '500px',
          borderRadius: '2rem',
          backColor: '#4682b4'
        },
        {
          frontImage: 'https://unsplash.it/502/502/',
          backText: 'link.tree.',
          width: '400px',
          borderRadius: '1rem',
          backColor: '#32cd32'
        },
        {
          frontImage: 'https://unsplash.it/503/503/',
          backText: 'link.tree.',
          width: '700px',
          borderRadius: '10rem',
          backColor: '#ff69b4'
        },
        {
          frontImage: 'https://unsplash.it/504/504/',
          backText: 'link.tree.',
          width: '500px',
          borderRadius: '50rem',
          backColor: '#20b2aa'
        },
        {
          frontImage: 'https://unsplash.it/505/505/',
          backText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.',
          width: '390px',
          borderRadius: '100px',
          backColor: '#dda0dd'
        }
    ];
    
    
      

    return (
        <div className="wrapper-container">
          <div className="cards-grid">
            {cards.map((card, index) => (
              <div
                className="card-item"
                key={index}
                style={{ width: card.width, borderRadius: card.borderRadius }}
              >
                <div className="flip-container">
                  <div
                    className="flip-front"
                    style={{ backgroundImage: `url(${card.frontImage})`, borderRadius: card.borderRadius }}
                  >
                  </div>
                  <div className="flip-back" style={{ width: card.width, borderRadius: card.borderRadius, backgroundColor: card.backColor }}>
                    <div className="flip-inner">
                      <p className="back-text">{card.backText}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
};

export default RandomFlippingCards;
