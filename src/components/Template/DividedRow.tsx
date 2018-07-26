import * as React from 'react';
import { Col, Row, RowProps } from 'reactstrap';

export interface DividedRowProps extends RowProps {
  leftColumn: React.ComponentType<{}>;
  rightColumn: React.ComponentType<{}>;
  columnProps?: any;
}

const lessRightPadding = { paddingRight: '5px' };

const DividedRow: React.SFC<DividedRowProps> = ({
  ref,
  leftColumn: LeftColumn,
  rightColumn: RightColumn,
  columnProps = {},
  ...props
}) => {
  return (
    <>
      <hr />
      <Row {...props}>
        <Col lg={2} md={3} sm={12} style={lessRightPadding}>
          <LeftColumn {...columnProps} />
        </Col>
        <Col lg={10} md={9} sm={12}>
          <RightColumn {...columnProps} />
        </Col>
      </Row>
    </>
  );
};

export default DividedRow;
