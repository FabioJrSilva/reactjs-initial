import React, { Component } from 'react';

class TechList extends Component {
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
            <li key={tech}>
              {tech}
              <button type="button" onClick={() => this.handleDelete(tech)}>
                Remover
              </button>
            </li>
          ))}
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
