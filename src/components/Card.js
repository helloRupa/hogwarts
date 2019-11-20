import React, { Component } from 'react';

const formatFileName = (name) => name.toLowerCase().split(' ').join('_');

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDescription: false,
    }
  }

  handleClick = () => {
    this.setState(prev => ({ showDescription: !prev.showDescription }));
  }

  description = () => {
    if (this.state.showDescription) {
      return <div className="description">{ this.props.hog.name } is { this.props.hog.greased ? "greased" : "ungreased" } and weighs { this.props.hog.weight } pounds. This hog's specialty is { this.props.hog.specialty }.</div>
    }

    return null;
  }

  render() {
    return (
      <div className="card" onClick={this.handleClick}>
        <div className="image">
          <img src={require(`../hog-imgs/${formatFileName(this.props.hog.name)}.jpg`)} alt="" />
        </div>
  
        <h2 className="header">{ this.props.hog.name }</h2>
  
        <div className="meta">
          <span className="date">{ this.props.hog['highest medal achieved'] }</span>
        </div>
      
        {this.description()}
      </div>
    )
  }
}
