import { TranslationFunction } from 'i18next';
import * as React from 'react';
import { Route } from 'react-router-dom';
import { NavbarProps } from 'reactstrap';
import { withText, WithTextProps } from '../../i18next';
import NavbarLinks from './NavbarLinks';
import { Navbar } from '../Navbar';

export interface NavigationBarProps extends NavbarProps, WithTextProps {
  title: string;
  secondary: string;
}

const NavigationBar: React.SFC<NavigationBarProps> = ({ children, t, i18n, ready, title, secondary, ...rest }) => {
  const renderTitle = ({ match }: any) => (match ? secondary : title);
  return (
    <Navbar heading={<Route path="/" exact={true} children={renderTitle} />}>
      <NavbarLinks />
    </Navbar>
  );
};

const mapText = (t: TranslationFunction) => ({
  title: t('common:siteTitle'),
  secondary: t('common:siteSubtitle')
});

export default withText(mapText)(NavigationBar) as React.SFC<NavbarProps>;
