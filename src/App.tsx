import { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import NavBar from "./components/NavBar";
import { ThemeContext } from "./context/theme";

const Routes = [
	{
		text: "ABOUT ME",
		link: "/#about",
	},
	{
		text: "SKILLS",
		link: "/#skills",
	},
	{
		text: "PROJECTS",
		link: "/#projects",
	},
];

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
				<NavBar
					root={{ text: "DiksonDev", link: "/" }}
					routes={Routes}
					isResponsive={width < 425}
				/>
				<section>SECTION CONTENT</section>
			</AppContainer>
		</ThemeContext>
	);
}

const AppContainer = styled.main`
	height: 100vh;
	width:100vw;
`;

export default App;
