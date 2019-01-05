import React, { Component } from 'react';
import ScrollArea from 'react-scrollbar';

export default class Translation extends Component {
  onScroll = value => {
    this.props.onScroll(value.topPosition);
  };

  renderLevel(data) {
    const keys = Object.keys(data);

    return keys.map(key => {
      if (typeof data[key] === 'object') {
        return (
          <>
            <h5>{key}</h5>
            <ul>{this.renderLevel(data[key])}</ul>
          </>
        );
      }

      return (
        <li>
          {key}: {data[key]}
        </li>
      );
    });
  }

  render() {
    const { data } = this.props;

    return (
      <ScrollArea style={{ flex: 1 }} onScroll={this.onScroll}>
        <ul style={{ flex: 1 }}>{this.renderLevel(data)}</ul>
      </ScrollArea>
    );
  }
}
