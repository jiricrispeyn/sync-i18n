import React, { Component } from 'react';
import { connect } from '../../store';
import keysDiff from 'keys-diff';

class Edit extends Component {
  renderDiff(rows) {
    return rows.map(items => {
      return (
        <div>
          {items.map((item, i) => {
            return (
              <span>
                {i > 0 && '>'}
                {item}
              </span>
            );
          })}
        </div>
      );
    });
  }

  render() {
    const { sourceFile, destinationFile } = this.props;
    const [src, dest] = keysDiff(sourceFile, destinationFile);

    return (
      <>
        {this.renderDiff(src)}
        {this.renderDiff(dest)}
      </>
    );
  }
}

export default connect(state => state)(Edit);
