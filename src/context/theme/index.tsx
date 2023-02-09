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
	buildColor(colorType, smooth?, alpha?) {
		let color = this.colors[colorType];
		let colorSmooth = color[2] + (smooth ?? 0);
		let alphaValue = alpha ?? 100;

		if (alphaValue < 0 || alphaValue > 100) {
			console.error("alpha out of range: ", alpha);
		}
		return `hsla(${color[0]},${color[1]}%,${colorSmooth}%,${alphaValue}%)`;
	},
	get(colorType) {
		let color = this.colors[colorType];
		return `hsl(${color[0]},${color[1]}%,${color[2]}%)`;
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
				get: prev.get,
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
