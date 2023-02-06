import styled from "styled-components";
import NavBar from "../components/NavBar";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

const Routes = [
	{
		text: "About",
		link: "/#about",
	},
	{
		text: "Skills",
		link: "/#skills",
	},
	{
		text: "Projects",
		link: "/#projects",
	},
	{
		text: "Contact",
		link: "/#contact",
	},
];

interface Props {
	isResponsive: boolean;
}

export default function ({ isResponsive }: Props) {
	return (
		<>
			<NavBar
				root={{ link: "/", text: "DiksonDev" }}
				routes={Routes}
				isResponsive={isResponsive}
			/>
			<SectionView>
				<FirstSection className="flex-col">
					<h2>Dikson Aranda</h2>
					<h3>I bring websites to life with code</h3>
					<p>
						I´m Frontend Developer, passionate about technology, and focused on
						building better projects. Always for ways to expand my horizons and
						challenge myself.I`m sure that I can be an important part of your
						company to build exceptional things.
					</p>
					<button role="button">Contact me</button>
				</FirstSection>
				<Section id="about">
					<TitleSection>About me</TitleSection>
					<About />
				</Section>
				<Section id="skills">
					<TitleSection>Skills</TitleSection>
					<Skills />
				</Section>
				<Section id="projects">
					<TitleSection>Projects</TitleSection>
					<Projects />
				</Section>
				<Section id="contact">
					<TitleSection>Contact me</TitleSection>
				</Section>
			</SectionView>
		</>
	);
}

const SectionView = styled.section`
  padding: 0 3em;
  @media (max-width:425px) {
    padding: 0% 1em;
  }
`;

const Section = styled.article`
	margin: 0 auto;
	max-width: 900px;
	min-height: 100vh;
  padding-top: 70px;
`;

const FirstSection = styled(Section)`
  justify-content: center;
  gap: .5em;
	height: 100vh;
  padding-top: 60px;
  & h2{
    color: ${({ theme }) => theme.buildColor("primary", 10)};
    font-size: 4rem;
    line-height: 0.8em;
    margin-bottom: .1em;
  }
	& h3{
    color: ${({ theme }) => theme.buildColor("primary", 0, 80)};
	}

  & h3{
    font-size: 3em;
    line-height: 0.8em;
    margin-bottom: .5em;
  }

  & button{
    border: ${({ theme }) => `1px solid ${theme.buildColor("secondary")}`};
    border-radius:5px;
    color: ${({ theme }) => theme.buildColor("secondary", 0, 80)};
		cursor: pointer;
    padding: 1.3em 3.5em;
    margin-top: 2em;
    transition: all 400ms ease-in-out;
    width: max-content;
  }
  & button:hover{
    background-color: ${({ theme }) => theme.buildColor("secondary", 40, 40)};
  }
	& p{
		max-width: 540px;
	}
`;

const TitleSection = styled.h4`
  color: ${({ theme }) => theme.buildColor("primary")};
	display: inline;
	font-size: 2rem;
	position: relative;
	&::before{
		background-color: ${({ theme }) => theme.buildColor("primary", 10, 80)};
		bottom: -3px;
		content: "";
		height: 3px;
		left: 0;
		position: absolute;
		width: 30px;
	}
`;
