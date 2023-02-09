import { ThemeContextI } from "./context/theme/theme";

declare module "styled-components" {
	interface DefaultTheme extends ThemeContextI {}
}
