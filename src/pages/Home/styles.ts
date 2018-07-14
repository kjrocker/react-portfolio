import styled from '../../theme';

export const ImageBanner = styled.header`
  height: 400px;
  background: url(${(props) => props.theme.home.backgroundImage}) center center no-repeat scroll;
  background-size: cover;
  color: ${(props) => props.theme.primary};
  padding: 0.5rem 1rem;
`;
