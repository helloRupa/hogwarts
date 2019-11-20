import React from 'react';
import { NavLink } from 'react-router-dom';

const regularStyle = {
	padding: '12px'
};

const activeStyle = {
	color: '#ff99ff'
}

const Nav = () => (
	<nav className="navWrapper">
		< NavLink style={regularStyle} activeStyle={activeStyle} exact to="/">All</NavLink>
		< NavLink style={regularStyle} activeStyle={activeStyle} to="/greased">Greased</NavLink>
	</nav>
);

export default Nav;
