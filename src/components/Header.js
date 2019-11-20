import React from 'react';
import piggy from '../porco.png'

const Header = () => (
  <header>
    <span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
  </header>
);

export default Header;
