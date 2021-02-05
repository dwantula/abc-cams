import React from 'react';
import classNames from 'classnames';
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
  const classValue = classNames({ card: true, about__card: true });

  return (
    <div className="about">
      {cards.map(({ img, title, text }) => (
        <Card key={title} className={classValue}>
          <img className="about__image" alt="gadgets" src={img} />
          <h3 className="about__title">{title}</h3>
          <p className="about__text">{text}</p>
        </Card>
      ))}
    </div>
  );
}

export default AboutUs;
