import React, { createContext, useContext, useEffect, useState } from "react";
import { Children } from "../../interfaces";

interface LocalRouter {
	localPath: string;
	hasEffect: boolean;
	setLocalPath(newPath: string, hasEffec?: boolean): void;
	sanitize(s: string): string;
	compareHash(s: string): boolean;
}
const hashSanitize = (s: string): string => {
	let indexHash = s.indexOf("#");
	return indexHash === -1 ? s : s.slice(indexHash);
};

export const LocalRouterContext = createContext<LocalRouter>({
	localPath: "",
	hasEffect: true,
	setLocalPath(newPath, hasEffect = true) {
		window.location.hash = newPath ?? "";
		this.localPath = newPath ?? "";
		this.hasEffect = hasEffect;
	},
	compareHash(s) {
		return hashSanitize(s) === hashSanitize(this.localPath);
	},
	sanitize(s: string) {
		return hashSanitize(s);
	},
});

export const LocalRouterProvider = ({ children }: Children) => {
	const [pathState, setPathState] = useState({
		localPath: "",
		hasEffect: true,
	});

	useEffect(() => {
		setPathState({
			localPath: `${window.location.hash}`,
			hasEffect: true,
		});
	}, []);

	const setLocalPath = (newPath: string | null, hasEffect = true) => {
		window.history.pushState(0, "", newPath ?? "");
		setPathState({
			localPath: `${window.location.hash}`,
			hasEffect,
		});
	};
	const sanitize = (s: string) => {
		return hashSanitize(s);
	};

	return (
		<LocalRouterContext.Provider
			value={{
				localPath: pathState.localPath,
				setLocalPath,
				hasEffect: pathState.hasEffect,
				compareHash: (s) => {
					return sanitize(s) === sanitize(pathState.localPath);
				},
				sanitize,
			}}
		>
			{children}
		</LocalRouterContext.Provider>
	);
};

export const useLocalRouter = () => {
	return useContext(LocalRouterContext);
};
