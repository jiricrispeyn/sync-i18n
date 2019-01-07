import React, { Component } from 'react';
import ScrollArea from 'react-scrollbar';

let index = 0;

export default class Translation extends Component {
  renderLevel(data) {
    const keys = Object.keys(data);

    return keys.map(key => {
      if (typeof data[key] === 'object') {
        return (
          <React.Fragment key={index++}>
            <h5>{key}</h5>
            <ul>{this.renderLevel(data[key])}</ul>
          </React.Fragment>
        );
      }

      return (
        <li key={index++}>
          {key}: {data[key]}
        </li>
      );
    });
  }

  render() {
    const { data } = this.props;

    return (
      <ScrollArea>
        <ul>{this.renderLevel(data)}</ul>
      </ScrollArea>
    );
  }
}
