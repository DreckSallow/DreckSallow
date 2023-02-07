import React, { createContext, useContext, useEffect, useState } from "react";
import { Children } from "../../interfaces";

interface LocalRouter {
	localPath: string;
	setLocalPath(newPath: string): void;
	sanitize(s: string): string;
	compareHash(s: string): boolean;
}
const hashSanitize = (s: string): string => {
	let indexHash = s.indexOf("#");
	return indexHash === -1 ? s : s.slice(indexHash);
};

export const LocalRouterContext = createContext<LocalRouter>({
	localPath: "",
	setLocalPath(newPath) {
		window.location.hash = newPath ?? "";
	},
	compareHash(s) {
		return hashSanitize(s) === hashSanitize(this.localPath);
	},
	sanitize(s: string) {
		return hashSanitize(s);
	},
});

export const LocalRouterProvider = ({ children }: Children) => {
	const [localPath, setlocalPath] = useState<LocalRouter["localPath"]>("");

	useEffect(() => {
		setlocalPath(`${window.location.hash}`);
		function listenHash() {
			setlocalPath(`${window.location.hash}`);
		}

		window.addEventListener("hashchange", listenHash);
		return () => {
			window.removeEventListener("hashchange", listenHash);
		};
	}, []);

	const setLocalPath = (newPath: string | null) => {
		window.location.hash = newPath ?? "";
	};
	const sanitize = (s: string) => {
		return hashSanitize(s);
	};

	return (
		<LocalRouterContext.Provider
			value={{
				localPath,
				setLocalPath,
				compareHash: (s) => {
					return sanitize(s) === sanitize(localPath);
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
