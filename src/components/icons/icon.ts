export interface Icon {
	fill?: string;
	className?: string;
}

export const cleanProps = (props: Icon): Required<Icon> => {
	return {
		className: props.className ?? "",
		fill: props.fill ?? "black",
	};
};
