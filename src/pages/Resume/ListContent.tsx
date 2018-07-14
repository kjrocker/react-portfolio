import { TranslationFunction } from 'i18next';
import * as React from 'react';
import { Col, Row, RowProps } from 'reactstrap';
import { Paragraph, SmallHeader } from '../../components';
import { withText } from '../../i18next';

export interface SkillProps extends RowProps {
  id: 'skills' | 'education';
  body: string[];
  title: string;
}

const Skills: React.SFC<SkillProps> = ({ ref, body, title, ...rest }) => {
  return (
    <>
      <hr />
      <Row {...rest}>
        <Col sm={2}>
          <SmallHeader>{title}</SmallHeader>
        </Col>
        <Col sm={10}>
          <Paragraph>{body.join(', ')}</Paragraph>
        </Col>
      </Row>
    </>
  );
};

const mapText = (t: TranslationFunction, ownProps: { id: 'skills' | 'education' }) => ({
  body: t(`resume:${ownProps.id}:content`, { returnObjects: true }),
  title: t(`resume:${ownProps.id}:title`)
});

export default withText(mapText)(Skills);
