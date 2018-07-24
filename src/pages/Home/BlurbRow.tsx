import { TranslationFunction } from 'i18next';
import * as React from 'react';
import { Col, Row, RowProps } from 'reactstrap';
import { Paragraph, SmallHeader } from '../../components';
import { withText, WithTextProps } from '../../i18next';

export interface BlurbRowProps extends RowProps, WithTextProps {
  blurbs: Array<{ title: string; content: string }>;
}

const BlurbRow: React.SFC<BlurbRowProps> = ({ ref, blurbs, i18n, t, ready, ...props }) => {
  return (
    <Row {...props}>
      {blurbs.map((val, i) => (
        <Col sm={4} key={i}>
          <SmallHeader>{val.title}</SmallHeader>
          <Paragraph>{val.content}</Paragraph>
        </Col>
      ))}
    </Row>
  );
};

const mapText = (t: TranslationFunction) => ({ blurbs: t('home:blurbs', { returnObjects: true }) });

export default withText(mapText)(BlurbRow);
