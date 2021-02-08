import React from 'react';

import Card from 'shared/components/Card/Card';

import './styles.scss';

const cards = [
  {
    img: 'images/gadgets.jpg',
    title: 'Lorem ipsum',
    text:
      'Etiam unllamcorper. Suspendisse a pellentesque dui, non felis maecenas.',
  },
  {
    img: 'images/typewriter.jpg',
    title: 'Lorem ipsum',
    text:
      'Etiam unllamcorper. Suspendisse a pellentesque dui, non felis maecenas.',
  },
  {
    img: 'images/ingredients.jpg',
    title: 'Lorem ipsum',
    text:
      'Etiam unllamcorper. Suspendisse a pellentesque dui, non felis maecenas.',
  },
];

function AboutUs() {
  return (
    <div className="about">
      {cards.map(({ img, title, text }) => (
        <Card key={img} cardClass={true}>
          <div className="about__image-container">
            <img className="about__image" alt="gadgets" src={img} />
          </div>
          <div className="about__text-container">
            <h3 className="about__title">{title}</h3>
            <p className="about__text">{text}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default AboutUs;
