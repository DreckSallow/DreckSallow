import React from "react";
import styled from "styled-components";
import Card from "../../components/Card";

//TODO: Change the url images to necesary projects:

export default function () {
	return (
		<Content className="flex-col">
			<CardProject
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
			</CardProject>
			<CardProject
				imgSrc="https://github.com/DreckSallow/Marknote/raw/main/readme/marknote-img.PNG"
				imgAlt="CountriesApp"
				title="CountriesApp"
				tech={["Svelte", "Typescript", "GrpahQl"]}
				repoLink="https://github.com/DreckSallow/countries-app-svelte"
				demoLink="https://countries-app-svelte-6x6p-kadnr1vr8-dreck2003.vercel.app/"
			>
				CountriesApp is a web application for viewing, filtering and sorting
				countries. <br />
				<br /> It's an app to learn more about the power of svelte as a
				framework (or compiler).
				<br />
				<br />
				CountriesApp gets the countries and other information from the backend
				(integrated with graphql), using data from a database in postgresSql.
			</CardProject>
			<CardProject
				imgSrc="https://github.com/DreckSallow/Marknote/raw/main/readme/marknote-img.PNG"
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
			</CardProject>
			<CardProject
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
			</CardProject>
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
	imgSrc: string;
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
		<Card {...card}>
			<ProjectContent className="Project__Content">
				<h3> {title}</h3>
				<p className="font-medium">{children}</p>
				<div className="Project__Tech">
					{tech.map((s) => (
						<span>{s}</span>
					))}
				</div>
				<div className="Project__Links flex">
					<ButtonLink href={repoLink} target="_blank">
						Repository
					</ButtonLink>
					{demoLink ? (
						<ButtonLink href={demoLink} target="_blank">
							Demo
						</ButtonLink>
					) : (
						<></>
					)}
				</div>
			</ProjectContent>
			<div className="Project__Img flex-row">
				<img src={imgSrc} alt={imgAlt} />
			</div>
		</Card>
	);
};

const ButtonLink = styled.a`
	background-color: ${({ theme }) => theme.buildColor("secondary", -5, 70)};
	border-radius: 2px;
	color: ${({ theme }) => theme.buildColor("back")};
	cursor: pointer;
	margin-right: .3em;
	padding: .1em .5em;
`;

const Content = styled.div`
  margin-top: 2em;
	gap: 3em;
`;

const CardProject = styled(Project)`
	/* margin: 0 auto; */
  position: relative;
	max-width: 500px;
	padding: 4%;
	padding-right: 8%;
	box-shadow:  rgb(0 0 0 / 12%) 0px 5px 10px;
		-webkit-box-shadow:  rgb(0 0 0 / 12%) 0px 5px 10px;
		-moz-box-shadow:  rgb(0 0 0 / 12%) 0px 5px 10px;

  & .Project__Img{
		border-radius: 10px;
		height: 80%;
		overflow: hidden;
    position: absolute;
		max-width: 90%;
    right: 10px;
    top: 0;
    transform: translate(90%,10%);
  }
`;

const ProjectContent = styled.div`

	& h3{
		margin-bottom: .3em;
	}

	& .Project__Tech{
		font-size: .7rem;
		margin-top: 1em;
		overflow-x: auto;
		padding: 0 .1em;
		color: ${({ theme }) => theme.get("fontColor")};
	}
	
	& .Project__Tech > span{
		margin-right: .3em;
		padding: .2em .5em;
		border-radius: 30px;
		outline: 1px solid green;
	}

	& .Project__Links{
		font-size: .75rem;
		margin-top: .7em;
	}
`;
