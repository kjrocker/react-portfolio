import { TranslationFunction } from 'i18next';
import * as React from 'react';
import { Col, ColProps } from 'reactstrap';
import { Typography, SmallHeader } from '../../components';
import { withText, WithTextProps } from '../../i18next';

export interface BiographyProps extends WithTextProps, ColProps {
  header: string;
  content: string;
}

const Biography: React.SFC<BiographyProps> = ({ ref, header, content, t, i18n, ready, ...props }) => (
  <Col {...props}>
    <SmallHeader>{header}</SmallHeader>
    <Typography>{content}</Typography>
  </Col>
);

const mapText = (t: TranslationFunction) => ({
  header: t('home:biographyTitle'),
  content: t('home:biographyContent', { postProcess: 'markdown-jsx' })
});

export default withText(mapText)(Biography) as React.SFC<ColProps>;
