import React, { Component } from 'react';
import Axios from 'axios';

export default class Pokemon extends Component {
  state = {
    name: '',
    pokemonIndex: '',
    imageUrl: '',
    types: []
  };

  async componentDidMount() {
    const { pokemonIndex } = this.props.match.params;

    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;
    //const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

    const res = await Axios.get(pokemonUrl);

    const name = res.data.name;
    const imageUrl = res.data.sprites.front_default;

    const types = res.data.types.map(type => type.type.name);

    this.setState({ imageUrl, pokemonIndex, name, types });
  }

  render() {
    return (
      <div className="col">
        <div className="card">
          <div className="card-header">
            <div className="row">
              <div className="col-5">
                <h5>{this.state.pokemonIndex}</h5>
              </div>
              <div className="col-7">
                <div className="float-right">
                  {this.state.types.map(type => (
                    <span class="badge badge-pill badge-primary mr-1">
                      {type
                        .toLowerCase()
                        .split(' ')
                        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                        .join(' ')}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-5 col-md-3 ">
              <img
                src={this.state.imageUrl}
                className="card-img-top rounded mx-auto mt-2"
              />
            </div>
            <div className="col-7 col-md-9">
              <h4 className="mx-auto">
                {this.state.name
                  .toLowerCase()
                  .split(' ')
                  .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                  .join(' ')}
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
