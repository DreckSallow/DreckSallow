export const ThemeConstants: { light: ThemeColors; dark: ThemeColors } = {
	light: {
		back: [0, 0, 98],
		primary: [207, 60, 41],
		secondary: [146, 60, 39],
		fontColor: [0, 0, 0],
	},
	dark: {
		back: [229, 8, 27],
		primary: [187, 66, 57],
		secondary: [42, 34, 69],
		fontColor: [0, 0, 98],
	},
};

export interface ThemeColors {
	back: number[];
	primary: number[];
	secondary: number[];
	fontColor: number[];
}

export type ColorType = keyof ThemeColors;

export interface ThemeContextI {
	colors: ThemeColors;
	buildColor(colorType: ColorType, smooth?: number, alpha?: number): string;
	get(colorType: ColorType): string;
}
