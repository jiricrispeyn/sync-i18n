import React, { Component } from 'react';
import { StyledNavbar, Title } from './style';

export default class Navbar extends Component {
  render() {
    return (
      <StyledNavbar>
        <Title>
          <span role="img" aria-label="Logo" aria-labelledby="logo">
            ✨
          </span>{' '}
          Sync I18n
        </Title>
      </StyledNavbar>
    );
  }
}
