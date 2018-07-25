import { TranslationFunction } from 'i18next';
import * as React from 'react';
import { withText } from '../../i18next';
import { Navbar } from '../Navbar';
import StickyFooter from './StickyFooter';
import FooterLinks from './FooterLinks';

export interface FooterProps extends React.BaseHTMLAttributes<{}> {
  copyright: string;
}

const noPadding = { padding: '0' };

const Footer: React.SFC<FooterProps> = (props) => (
  <StickyFooter {...props}>
    <Navbar heading={props.copyright} style={noPadding}>
      <FooterLinks />
    </Navbar>
  </StickyFooter>
);

const mapText = (t: TranslationFunction) => ({
  copyright: t('common:footer:copyrightText', { year: new Date().getFullYear() })
});

export default withText(mapText)(Footer);
