import * as React from 'react';
import { ThemeProvider, invertTheme } from '../../theme';
import { Container, NavbarProps, Nav } from 'reactstrap';
import { NavbarBrand, Navbar } from './styles';

export interface GeneralNavbarProps extends NavbarProps {
  heading: React.ReactNode;
}

const GeneralNavbar: React.SFC<GeneralNavbarProps> = ({ heading, children, ...rest }) => {
  return (
    <ThemeProvider theme={invertTheme}>
      <Navbar {...rest}>
        <Container>
          <NavbarBrand>{heading || ''}</NavbarBrand>
          <Nav>{children}</Nav>
        </Container>
      </Navbar>
    </ThemeProvider>
  );
};

export default GeneralNavbar;
