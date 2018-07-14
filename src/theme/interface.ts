export default interface ThemeInterface {
  primary: string;
  primaryFont: string;
  primaryFontColor?: string;
  secondaryFont: string;
  inverseFontColor: string;
  secondary: string;
  background: string;
  inverseBackground: string;
  inverseLinkColor: string;
  inverseLinkDisabled: string;
  inverseLinkHover: string;
  link: string;
  disabled: string;
  home: {
    backgroundImage: string;
  };
}
