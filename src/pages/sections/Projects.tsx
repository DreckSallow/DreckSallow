import React from "react";
import styled from "styled-components";
import Card from "../../components/Card";

export default function () {
	return (
		<Content className="flex-col">
			<Project
				imgSrc="/DreckSallow/countries-app.png"
				imgAlt="CountriesApp"
				title="CountriesApp"
				tech={["Svelte", "Typescript", "GraphQl"]}
				repoLink="https://github.com/DreckSallow/countries-app-svelte"
				demoLink="https://countries-app-svelte-6x6p.vercel.app/"
			>
				CountriesApp is a web application for viewing, filtering and sorting
				countries. <br />
				<br /> It's an app to learn more about the power of svelte as a
				framework (or compiler).
				<br />
				<br />
				CountriesApp gets the countries and other information from the backend
				(integrated with graphql), using data from a database in postgresSql.
			</Project>
			<Project
				imgSrc="https://github.com/DreckSallow/Marknote/raw/main/readme/marknote-img.PNG"
				imgAlt="Marknote"
				title="Marknote"
				tech={["Svelte", "Tauri"]}
				repoLink="https://github.com/DreckSallow/Marknote"
			>
				Marknote is a small markdown editor. Its focused to use in the desktop.
				<br />
				<br />
				Markdown allow edit markdown files (based in CommonMark) and see the
				text parsed. Have a file tree to manage the files and folders in the
				project
			</Project>
			<Project
				imgSrc="/DreckSallow/wflow.png"
				imgAlt="Wflow"
				title="Wflow"
				tech={["Rust"]}
				repoLink="https://github.com/DreckSallow/wflow"
			>
				Wflow is a powerful cli that allows you to manage your workflow much
				better.Wflow allows you to save, edit and delete project paths to use at
				any time and open with vscode. <br />
				<br /> Also, the user can manage their todos/tasks, changing the status
				as "completed" or "not started".
			</Project>
			<Project
				imgSrc="https://github.com/DreckSallow/Waxed/raw/main/Readme/workspace.PNG"
				imgAlt="Waxed"
				title="Waxed"
				tech={["Typescript"]}
				repoLink="https://github.com/DreckSallow/wflow"
			>
				Is an application to have a better organization of information. With
				this app you can do:
				<br />
				<br />- Create learning spaces: <br />- Control Panel: <br /> - Create
				and delete links and PDF files:
				<br />- Add a summary or a note:
			</Project>
		</Content>
	);
}

interface ProjectProps {
	className?: string;
	title: string;
	children?: React.ReactNode;
	tech: string[];
	repoLink: string;
	demoLink?: string;
	imgSrc?: string;
	imgAlt: string;
}

const Project = ({
	title,
	children,
	tech,
	repoLink,
	demoLink,
	imgSrc,
	imgAlt,
	...card
}: ProjectProps) => {
	return (
		<CardProject className="grid">
			<CardProjectContent {...card}>
				<h3> {title}</h3>
				<p className="font-medium">{children}</p>
				<div className="Project__Tech flex">
					{tech.map((s) => (
						<div>
							<span>{s}</span>
						</div>
					))}
				</div>
				<div className="Project__Links flex">
					<ButtonLink href={repoLink} target="_blank">
						Repository
					</ButtonLink>
					{demoLink && (
						<ButtonLink href={demoLink} target="_blank">
							Demo
						</ButtonLink>
					)}
				</div>
			</CardProjectContent>
			<div className="Project__Img flex-row">
				<img src={imgSrc} alt={imgAlt} />
			</div>
		</CardProject>
	);
};

const ButtonLink = styled.a`
	background-color: ${({ theme }) => theme.buildColor("secondary", -5, 70)};
	border-radius: 2px;
	color: white;
	cursor: pointer;
	margin-right: .3em;
	padding: .1em .5em;
`;

const Content = styled.div`
	gap: 3em;
  margin-top: 2em;
`;

const CardProjectContent = styled(Card)`
	background-color: ${({ theme }) => theme.buildColor("back", 10, 80)};
	box-shadow:  rgb(0 0 0 / 12%) 0px 5px 10px;
		-webkit-box-shadow:  rgb(0 0 0 / 12%) 0px 5px 10px;
		-moz-box-shadow:  rgb(0 0 0 / 12%) 0px 5px 10px; 
	grid-area: 1/1/auto/3;
	padding: 2em;
	padding-right: 5em;

	@media (max-width:650px){
		grid-area: 1/1/2/1;
		padding: 2em;
	}

	& p{
		margin-top: 1em;
	}
	& .Project__Tech{
		font-size: .65rem;
		font-weight: 500;
		flex-wrap: wrap;
		margin-top: 1em;
		padding: 0 .1em;
	}
	& .Project__Tech  span{
		border: ${({ theme }) =>
			`1px solid ${theme.buildColor("secondary", -5, 90)}`};
		border-radius: 30px;
		margin-right: .3em;
		padding: .2em .5em;
	}
	& .Project__Links{
		font-size: .75rem;
		margin-top: .7em;
	}

`;

const CardProject = styled.div`
	align-items: center;
	grid-template-columns: 1fr 5em 1fr;
	
	& > div:last-child{
		grid-area: 1/2/auto/4;
		@media (max-width:650px){
			display: none;
		}
	}


	@media (max-width:650px){
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
	}

  & .Project__Img{
		border-radius: 10px;
		overflow: hidden;
		max-width: 410px;
  }
`;
