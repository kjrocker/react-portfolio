import { TranslationFunction } from 'i18next';
import * as React from 'react';
import { Col, Row, RowProps } from 'reactstrap';
import { Paragraph, SmallHeader } from '../../components';
import { withText } from '../../i18next';

export interface BlurbRowProps extends RowProps {
  blurbs: Array<{ title: string; content: string }>;
}

const BlurbRow: React.SFC<BlurbRowProps> = ({ ref, blurbs, ...props }) => {
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

const mapText = (t: TranslationFunction) => ({ blurbs: t('common:home:blurbs', { returnObjects: true }) });

export default withText(mapText)(BlurbRow);
