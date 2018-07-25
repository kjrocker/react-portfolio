import * as React from 'react';
import { Row, RowProps, Col } from 'reactstrap';

export interface DividedRowProps extends RowProps {
  leftColumn: React.ComponentType<{}>;
  rightColumn: React.ComponentType<{}>;
  columnProps?: any;
  leftColumnCount?: number;
  rightColumnCount?: number;
}

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
        <Col xs={leftColumnCount} style={{ paddingRight: '0px' }}>
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
