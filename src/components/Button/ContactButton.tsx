import * as React from 'react';
import styled from '../../theme';

export interface ContactButtonProps extends React.AnchorHTMLAttributes<{}> {
  hoverBackgroundColor?: string;
  backgroundColor?: string;
}

const ContactButton = styled.a`
  border: none;
  display: inline-block;
  margin: 5px;
  border-radius: 5px;
  padding: 8px 16px;
  vertical-align: middle;
  overflow: hidden;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
  color: ${(props) => props.theme.inverseFontColor};
  ${(props: ContactButtonProps) => (props.backgroundColor ? `background-color: ${props.backgroundColor}` : '')};
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    color: ${(props) => props.theme.inverseFontColor};
    text-decoration: none;
    ${(props: ContactButtonProps) =>
      props.hoverBackgroundColor ? `background-color: ${props.hoverBackgroundColor}` : ''};
  }
`;

export default ContactButton;
