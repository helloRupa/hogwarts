import React from 'react';
import Card from './Card';

const Greased = ({ hogs }) => {

  const greasedHogs = hogs.filter(hog => hog.greased);

  return (
    <div className="ui grid container cards">
      { greasedHogs.map(hog => <Card hog={hog} key={hog.name} /> ) }
    </div>
  );

}

export default Greased;
