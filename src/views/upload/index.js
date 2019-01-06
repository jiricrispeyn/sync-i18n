import React, { Component } from 'react';
import { Container } from './style';
import { actions } from '../../store';
import TheDropzone from '../../components/dropzone';
import read from '../../utils/reader';

export default class Upload extends Component {
  onDrop = async files => {
    try {
      const destinationFile = await read(files[0]);

      actions.setDestinationFile(destinationFile);
      this.props.navigate('/upload');
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <Container>
        <div>Upload</div>
        <div>
          <TheDropzone onDrop={this.onDrop} />
        </div>
      </Container>
    );
  }
}
