import { useEffect } from "react";
import { useLocalRouter } from "../context/router/localRouter";
import { Children } from "../interfaces";
import { scrollAnimation } from "../utils/scrollAnimation";

interface IntoProps extends Children {
	id?: string;
	className?: string;
}

export default function ({ id, children, className }: IntoProps) {
	const { localPath, hasEffect } = useLocalRouter();

	useEffect(() => {
		if (id === localPath.slice(1) && hasEffect) {
			scrollAnimation(`#${id}`);
		}
	}, [localPath]);

	return (
		<section id={id} className={className}>
			{children}
		</section>
	);
}
