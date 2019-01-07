import React, { Component } from 'react';
import { Container, CodeBlock } from './style';
import { connect, actions } from '../../store';
import TheDropzone from '../../components/dropzone';
import read from '../../utils/reader';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

class Upload extends Component {
  onDrop = async files => {
    try {
      const destinationFile = await read(files[0]);

      actions.setDestinationFile(destinationFile);
      this.props.navigate('/edit');
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    return (
      <Container>
        <div>
          <CodeBlock>
            <header className="CodeBlock-header">
              <p className="CodeBlock-header-title">Source File</p>
            </header>
            <div className="CodeBlock-content">
              <pre>
                <code className="language-javascript">
                  {JSON.stringify(this.props.sourceFile, null, 2)}
                </code>
              </pre>
            </div>
          </CodeBlock>
        </div>
        <div>
          <TheDropzone onDrop={this.onDrop} />
        </div>
      </Container>
    );
  }
}

export default connect(({ sourceFile }) => ({ sourceFile }))(Upload);
