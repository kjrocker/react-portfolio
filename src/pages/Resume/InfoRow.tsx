import * as React from 'react';
import { Col, Row } from 'reactstrap';
import { SmallHeader, Typography } from '../../components';

const RightText = Typography.extend`
  float: right;
  padding-top: 1em;
  text-align: right;
`;

const InfoRow: React.SFC<{}> = (props) => {
  return (
    <Row>
      <Col xs={4}>
        <SmallHeader>Kevin Rocker</SmallHeader>
      </Col>
      <Col xs={8}>
        <RightText>
          <div>kevin.j.rocker@gmail.com</div>
          <div>(704) 960-5118</div>
        </RightText>
      </Col>
    </Row>
  );
};

export default InfoRow;
