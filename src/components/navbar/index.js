import React, { Component } from 'react';
import { Link } from '@reach/router';
import { StyledNavbar, Title } from './style';

export default class Navbar extends Component {
  render() {
    return (
      <StyledNavbar>
        <Title>
          <Link to="/">
            <span role="img" aria-label="Logo" aria-labelledby="logo">
              ✨
            </span>{' '}
            Sync I18n
          </Link>
        </Title>
      </StyledNavbar>
    );
  }
}
