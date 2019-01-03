import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

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
    const files = this.state.files.map(file => (
      <li key={file.name}>
        {file.name} - {file.size} bytes
      </li>
    ));

    return (
      <section>
        <Dropzone onDrop={this.onDrop} onFileDialogCancel={this.onCancel}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drop files here, or click to select files</p>
            </div>
          )}
        </Dropzone>
        <aside>
          <h4>Files</h4>
          <ul>{files}</ul>
        </aside>
      </section>
    );
  }
}

TheDropzone.propTypes = {
  onDrop: PropTypes.func,
};
