import * as React from 'react';
import { ExternalNavLink } from '../Navbar';
import { Nav, NavProps } from 'reactstrap';
import { EMAIL_KEY } from '../../pages/Home/Contact';

const FooterLinks: React.SFC<NavProps> = ({ ref, ...props }) => {
  return (
    <Nav {...props}>
      <ExternalNavLink href={`mailto:${EMAIL_KEY}`} target="__blank">
        Email
      </ExternalNavLink>
      <ExternalNavLink href="https://github.com/kjrocker/react-portfolio" target="__blank">
        Source
      </ExternalNavLink>
    </Nav>
  );
};

export default FooterLinks;
