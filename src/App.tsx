import { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import { ThemeContext } from "./context/theme";
import Principal from "./pages/Principal";

function App() {
	const [width, setWidth] = useState(document.body.offsetWidth);

	useEffect(() => {
		let handleScroll = () => {
			setWidth(document.body.offsetWidth);
		};
		window.addEventListener("resize", handleScroll);
		return () => {
			window.removeEventListener("resize", handleScroll);
		};
	}, []);

	return (
		<ThemeContext>
			<AppContainer>
				<Principal isResponsive={width < 425} />
			</AppContainer>
		</ThemeContext>
	);
}

const AppContainer = styled.main`
	min-height: 100vh;
	width:100vw;
	overflow-x: hidden;
`;

export default App;
