export const ThemeConstants: { light: ThemeColors; dark: ThemeColors } = {
	light: {
		back: "0, 0%, 98%",
		primary: "207, 60%, 41%",
		secondary: "146, 60%, 39%",
		fontColor: "#000000",
	},
	dark: {
		back: "229, 8%, 27%",
		primary: "207, 60%, 41%",
		secondary: "146, 60%, 39%",
		fontColor: "#FFFFFF",
	},
};

export interface ThemeColors {
	back: string;
	primary: string;
	secondary: string;
	fontColor: string;
}

export type ColorType = keyof ThemeColors;

export interface ThemeContextI {
	colors: ThemeColors;
	buildColor(colorType: ColorType, alpha: number): string;
}
