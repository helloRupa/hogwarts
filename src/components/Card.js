import React from 'react';

const formatFileName = (name) => name.toLowerCase().split(' ').join('_');

const Card = ({ hog }) => {

  const handleClick = () => {
    console.log('click');
  }

  return (
    <div className="card" onClick={handleClick}>
      <div className="image">
        <img src={require(`../hog-imgs/${formatFileName(hog.name)}.jpg`)} alt="" />
      </div>

      <h2 className="header">{ hog.name }</h2>

      <div className="meta">
        <span className="date">{ hog['highest medal achieved'] }</span>
      </div>
    
      <div className="description hide">
        { hog.name } is { hog.greased ? "greased" : "ungreased" } and weighs { hog.weight } pounds. This hog's specialty is { hog.specialty }.
     </div>
    </div>
  )
  
};

export default Card;
