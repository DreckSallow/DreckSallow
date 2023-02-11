import { createContext, useContext, useEffect, useState } from "react";
import { ThemeConstants, ThemeContextI } from "./theme";
import { ThemeProvider } from "styled-components";

type TypeTheme = keyof typeof ThemeConstants;

type ChangeTypeTheme = (oldType: TypeTheme) => TypeTheme;

interface ContextThemeI {
	changeTheme(typeTheme: ChangeTypeTheme): void;
	typeTheme: TypeTheme | null;
	toggleTheme(): void;
}

const ContextTheme = createContext<ContextThemeI>({
	changeTheme(typeTheme: ChangeTypeTheme) {},
	typeTheme: null,
	toggleTheme() {},
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
	const [typeTheme, setTypeTheme] = useState<TypeTheme | null>("light");

	useEffect(() => {
		const themePrefer = window.localStorage.getItem("theme-prefer");
		if (!themePrefer) return;
		setTypeTheme(themePrefer === "dark" ? "dark" : "light");
		setThemeContext((prev) => ({
			buildColor: prev.buildColor,
			get: prev.get,
			colors: { ...ThemeConstants[themePrefer as TypeTheme] },
		}));
	}, []);

	const changeTheme: ContextThemeI = {
		changeTheme: function (fn): void {
			const newTypeTheme = fn(typeTheme ?? "light");
			setThemeContext((prev) => ({
				buildColor: prev.buildColor,
				get: prev.get,
				colors: { ...ThemeConstants[newTypeTheme] },
			}));
			setTypeTheme(newTypeTheme);
			window.localStorage.setItem("theme-prefer", newTypeTheme);
		},
		typeTheme,
		toggleTheme() {
			const newTypeTheme = typeTheme === "dark" ? "light" : "dark";
			setThemeContext((prev) => ({
				buildColor: prev.buildColor,
				get: prev.get,
				colors: { ...ThemeConstants[newTypeTheme] },
			}));
			setTypeTheme(newTypeTheme);
			window.localStorage.setItem("theme-prefer", newTypeTheme);
		},
	};

	return (
		<ContextTheme.Provider value={changeTheme}>
			<ThemeProvider theme={themeContext}>
				{typeTheme && children}
			</ThemeProvider>
		</ContextTheme.Provider>
	);
};

export const useContextTheme = () => {
	return useContext(ContextTheme);
};
