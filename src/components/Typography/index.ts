import styled from '../../theme';

export const Paragraph = styled.p`
  color: ${(props) => props.theme.primary};
  font-family: ${(props) => props.theme.primaryFont};
`;

// Get the typography styling when we're rendering
// markdown, which provides its own `p` tags.
export const Typography = Paragraph.withComponent('div');

const BaseHeader = styled.h1`
  color: ${(props) => props.theme.primary};
  font-family: ${(props) => props.theme.secondaryFont};
  margin-top: 20px;
`;

export const Header = BaseHeader.extend`
  color: ${(props) => props.theme.primaryFontColor};
`;

export const InverseHeader = BaseHeader.extend`
  color: ${(props) => props.theme.inverseFontColor};
`;

export const SmallHeader = Header.withComponent('h2');
