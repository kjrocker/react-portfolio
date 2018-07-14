import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';
import baseTheme from './baseTheme';
import ThemeInterface from './interface';

export const invertTheme = ({ primary, inverseFontColor, ...rest }: ThemeInterface): ThemeInterface => ({
  primary: inverseFontColor,
  inverseFontColor: primary,
  ...rest
});

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<ThemeInterface>;

export { ThemeInterface };
export { css, injectGlobal, keyframes, ThemeProvider };
export default styled;
export { baseTheme };
