import { createContext, useContext, useState } from "react";
import { ThemeConstants, ThemeContextI } from "./theme";
import { ThemeProvider } from "styled-components";

type TypeTheme = keyof typeof ThemeConstants;

interface ContextThemeI {
	changeTheme(typeTheme: TypeTheme): void;
}

const ContextTheme = createContext<ContextThemeI>({
	changeTheme(typeTheme: TypeTheme) {},
});

const ThemeState: ThemeContextI = {
	colors: { ...ThemeConstants.light },
	buildColor(colorType, alpha?: number) {
		let alphaPercentage = alpha ?? 100;
		if (alphaPercentage < 0 || alphaPercentage > 100) {
			console.error(`The alpha provided goes out of range: ${alpha}`);
			alphaPercentage = 100;
		}
		return `hsla(${this.colors[colorType]},${alphaPercentage}%)`;
	},
};

interface Props {
	children: JSX.Element | JSX.Element[];
}

export const ThemeContext = ({ children }: Props) => {
	const [themeContext, setThemeContext] = useState(ThemeState);

	const changeTheme: ContextThemeI = {
		changeTheme: function (typeTheme): void {
			setThemeContext((prev) => ({
				buildColor: prev.buildColor,
				colors: { ...ThemeConstants[typeTheme] },
			}));
		},
	};

	return (
		<ContextTheme.Provider value={changeTheme}>
			<ThemeProvider theme={themeContext}>{children}</ThemeProvider>
		</ContextTheme.Provider>
	);
};

export const useContextTheme = () => {
	return useContext(ContextTheme);
};
