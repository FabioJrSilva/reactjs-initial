import React, { Component } from 'react';

import TechItem from './TechItem';

class TechList extends Component {
  static defaultProps = {
    tech: 'Static'
  };

  state = {
    newTech: '',
    techs: ['Nodejs', 'ReactJS', 'React Native']
  };

  handleInputChange = (event) => {
    this.setState({ newTech: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ techs: [...this.state.techs, this.state.newTech], newTech: '' });
  };

  handleDelete = (tech) => {
    this.setState({
      techs: this.state.techs.filter((t) => {
        return t !== tech;
      })
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{this.state.newTech}</h1>
        <ul>
          {this.state.techs.map((tech) => (
            <TechItem key={tech} tech={tech} onDelete={() => this.handleDelete(tech)} />
          ))}
          <li>{TechList.defaultProps.tech}</li>
          <TechItem />
        </ul>
        <div>
          <input type="text" onChange={this.handleInputChange} value={this.state.newTech} />
        </div>
        <button type="submit">Salvar</button>
      </form>
    );
  }
}

export default TechList;
