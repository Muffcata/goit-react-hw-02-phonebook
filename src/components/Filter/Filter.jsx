import { Component } from 'react';

export class Filter extends Component {
  render() {
    const { filter } = this.props;
    return (
      <div>
        <label>
          Find contacts by name
          <input onChange={filter} type="text"></input>
        </label>
      </div>
    );
  }
}

export default Filter;
