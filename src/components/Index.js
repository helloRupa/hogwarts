import React, { Component } from 'react';
import Card from './Card';

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hogsList: props.hogs,
      sort: 'unsorted',
      showFront: true,
    };
  }

  handleChange = (e) => {
    this.setState({
      sort: e.target.value
    }, this.sort);
  }

  sort = () => {
    const hogs = [...this.state.hogsList];

    switch(this.state.sort) {
      case 'name':
        hogs.sort((hog1, hog2) => hog1.name.localeCompare(hog2.name));
        this.setState({ hogsList: hogs });
        break;
      case 'weight':
        hogs.sort((hog1, hog2) => hog1.weight - hog2.weight);
        this.setState({ hogsList: hogs });
        break;
      default:
        this.setState({ hogsList: this.props.hogs });
    }
  }

  render() {
    return (
      <div>
        <div className="options" value={this.state.sort} onChange={this.handleChange}>
          <select>
            <option value="unsorted">All Unsorted</option>
            <option value="name">Sort by Name</option>
            <option value="weight">Sort by Weight</option>
          </select>
        </div>

        <div className="ui grid container cards">
          { this.state.hogsList.map( hog => <Card key={hog.name} hog={hog} /> ) }
        </div>
      </div>
    )
  }
}
