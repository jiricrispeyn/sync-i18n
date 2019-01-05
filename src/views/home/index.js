import React, { Component } from 'react';
import TheDropzone from '../../components/dropzone';
import { Container } from './style';
import read from '../../utils/reader';

export default class Home extends Component {
  state = {
    sourceFile: null,
  };

  onDrop = async files => {
    try {
      const sourceFile = await read(files[0]);

      this.setState({ sourceFile }, () => {
        this.props.navigate('/upload');
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <Container>
        <TheDropzone onDrop={this.onDrop} />
      </Container>
    );
  }
}
