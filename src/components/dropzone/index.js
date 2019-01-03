import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

export default class TheDropzone extends Component {
  state = {
    files: [],
  };

  onDrop = files => {
    this.setState({ files });
    console.log(files);
  };

  onCancel = () => {
    this.setState({ files: [] });
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
