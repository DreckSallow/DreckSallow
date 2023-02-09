type Callback = (e: IntersectionObserverEntry) => void;

export const createObserverDefault = (execute: Callback) => {
	const callback: IntersectionObserverCallback = (entries, observer) => {
		entries.forEach((entry) => {
			execute(entry);
		});
	};
	return new IntersectionObserver(callback, {
		rootMargin: "0px",
		threshold: 0.1,
	});
};
