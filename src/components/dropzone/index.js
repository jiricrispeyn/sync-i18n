import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import { StyledDropzone, FileInput } from './style';

export default class TheDropzone extends Component {
  state = {
    files: [],
  };

  onDrop = async files => {
    // this.setState({ files });
    this.props.onDrop(files);
  };

  onCancel = () => {
    // this.setState({ files: [] });
  };

  render() {
    return (
      <StyledDropzone>
        <Dropzone onDrop={this.onDrop} onFileDialogCancel={this.onCancel}>
          {({ getRootProps, getInputProps }) => (
            <FileInput {...getRootProps()}>
              <input {...getInputProps()} />
              <h3>Drop your files here</h3>
              <p>Or upload a file from your computer</p>
            </FileInput>
          )}
        </Dropzone>
      </StyledDropzone>
    );
  }
}

TheDropzone.propTypes = {
  onDrop: PropTypes.func,
};
