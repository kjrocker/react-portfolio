import { TranslationFunction } from 'i18next';
import * as React from 'react';
import { Col, ColProps } from 'reactstrap';
import { Paragraph, SmallHeader } from '../../components';
import { withText, WithTextProps } from '../../i18next';

export interface BiographyProps extends WithTextProps, ColProps {
  header: string;
  content: string;
}

const Biography: React.SFC<BiographyProps> = ({ ref, header, content, ...props }) => (
  <Col {...props}>
    <SmallHeader>{header}</SmallHeader>
    <Paragraph>{content}</Paragraph>
  </Col>
);

const mapText = (t: TranslationFunction) => ({
  header: t('common:home:biographyTitle'),
  content: t('common:home:biographyContent', { postProcess: 'markdown-jsx' })
});

export default withText(mapText)(Biography) as React.SFC<ColProps>;
