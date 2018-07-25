import * as React from 'react';
import { Row, RowProps, Col } from 'reactstrap';

export interface DividedRowProps extends RowProps {
  leftColumn: React.ComponentType<{}>;
  rightColumn: React.ComponentType<{}>;
  columnProps?: any;
  leftColumnCount?: number;
  rightColumnCount?: number;
}

const lessRightPadding = { paddingRight: '5px' };

const DividedRow: React.SFC<DividedRowProps> = ({
  ref,
  leftColumnCount = 2,
  rightColumnCount = 10,
  leftColumn: LeftColumn,
  rightColumn: RightColumn,
  columnProps = {},
  ...props
}) => {
  return (
    <>
      <hr />
      <Row {...props}>
        <Col xs={leftColumnCount} style={lessRightPadding}>
          <LeftColumn {...columnProps} />
        </Col>
        <Col xs={rightColumnCount}>
          <RightColumn {...columnProps} />
        </Col>
      </Row>
    </>
  );
};

export default DividedRow;
