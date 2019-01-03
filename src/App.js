import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import TheDropzone from './components/dropzone';
import read from './utils/reader';

class App extends Component {
  state = {
    src: null,
  };

  onDrop = async files => {
    try {
      const src = await read(files[0]);

      console.log(src);

      this.setState({ src });
    } catch (err) {
      console.log(err);
    }
  };

  renderSrc(src) {
    return (
      <pre className="App-src">
        <code>{JSON.stringify(src, null, 4)}</code>
      </pre>
    );
  }

  render() {
    const { src } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}

          {src ? (
            this.renderSrc(src)
          ) : (
            <TheDropzone className="The-dropzone" onDrop={this.onDrop} />
          )}
        </header>
      </div>
    );
  }
}

export default App;
