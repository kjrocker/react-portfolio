import { NavLink as NavLinkBase } from 'react-router-dom';
import { Navbar as NavbarBase, NavbarBrand as NavbarBrandBase } from 'reactstrap';
import styled from '../../theme';

export const NavLink = styled(NavLinkBase)`
  display: block;
  font-size: 18px;
  padding: 0.5rem 1rem;
  color: ${(props) => props.theme.inverseLinkColor};
  :hover {
    color: ${(props) => props.theme.inverseLinkHover};
  }
  &.active {
    color: ${(props) => props.theme.inverseLinkDisabled};
  }
`;

export const Navbar = styled(NavbarBase)`
  background-color: ${(props) => props.theme.inverseBackground};
`;

export const NavbarBrand = styled(NavbarBrandBase)`
  color: ${(props) => props.theme.primary} !important;
`;
