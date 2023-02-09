import React from "react";

export const scrollAnimation = (
	target: string | React.MutableRefObject<null | HTMLElement>,
) => {
	if (typeof target === "string") {
		if (target.length === 0) return;
		const element = document.querySelector(target);
		if (element) {
			scroll(element as HTMLElement);
		} else {
			console.error(`The element ${target} does not exist within the DOM`);
		}
	} else if (target.current) {
		scroll(target.current);
	}
};

const scroll = (target: HTMLElement) => {
	let targetScrolled = target.offsetTop;
	let scrolled = window.scrollY;
	let duration = 800;
	let startTime: number | null = null;
	let done = false; // Flag to determine when the animation ends

	let animation = (currentTime: number) => {
		if (startTime === null) startTime = currentTime;
		if (done) return;
		let elapsedTime = currentTime - startTime;
		let fraction = elapsedTime / duration;
		if (fraction < 1) {
			let scroll = 0;
			if (scrolled < targetScrolled) {
				const distance = targetScrolled - scrolled;
				scroll = scrolled + distance * fraction;
			} else {
				const distance = scrolled - targetScrolled;
				scroll = scrolled - distance * fraction;
			}
			window.scroll(0, scroll);
			window.requestAnimationFrame(animation);
			return;
		}

		window.scroll(0, targetScrolled);
		window.requestAnimationFrame(animation);
		done = true;
	};
	window.requestAnimationFrame(animation);
};
