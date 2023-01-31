import { useState, useCallback } from "react";
import styled from "styled-components";
import { MenuIcon, XIcon } from "./icons/Menu";

interface RouteLink {
	text: string | JSX.Element | JSX.Element[];
	link: string;
}

interface LinkI extends RouteLink {
	click(link: RouteLink["link"]): void;
	className?: string;
}

const Link = ({ link, text, click, className }: LinkI) => {
	return (
		<button
			className={className}
			onClick={(e) => {
				e.preventDefault();
				window.history.pushState({}, "", link);
				click(link);
			}}
			tabIndex={0}
			role="link"
		>
			{text}
		</button>
	);
};

interface NavBarProps {
	root: RouteLink;
	routes: RouteLink[];
	isResponsive?: boolean;
}

export default function NavBar({ root, routes, isResponsive }: NavBarProps) {
	const [displayContent, setDisplayContent] = useState(false);
	const [currentPath, setCurrentPath] = useState(
		window.location.pathname + window.location.hash,
	);

	const handleNavigation = useCallback(
		(link: string) => {
			setCurrentPath(link);
			if (isResponsive) {
				setDisplayContent((p) => !p);
			}
		},
		[displayContent],
	);

	return (
		<>
			<Nav className="flex-row w-full" isResponsive={isResponsive ?? false}>
				<NavLink
					className="flex"
					selected={false}
					click={handleNavigation}
					text={root.text}
					link={root.link}
				/>
				{!isResponsive &&
					routes.map((r, i) => {
						return (
							<NavLink
								// rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								key={i}
								selected={r.link === currentPath}
								click={handleNavigation}
								text={r.text}
								link={r.link}
							/>
						);
					})}
				{isResponsive && (
					<div
						className="flex"
						onClick={() => setDisplayContent(!displayContent)}
						role="button"
						onKeyDown={() => {}}
					>
						{displayContent ? (
							<XIcon fill="black" />
						) : (
							<MenuIcon fill="black" />
						)}
					</div>
				)}
			</Nav>
			<NavContent
				isWatch={displayContent && (isResponsive ?? false)}
				className="flex-col flex-center"
			>
				{routes.map((r, i) => {
					return (
						<NavLink
							// rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={i}
							selected={r.link === currentPath}
							click={handleNavigation}
							text={r.text}
							link={r.link}
						/>
					);
				})}
			</NavContent>
		</>
	);
}

const Nav = styled.section<{ isResponsive: boolean }>`
	background-color: ${({ theme }) => theme.buildColor("back", 2)};
	color: ${({ theme }) => theme.buildColor("fontColor")};
	font-size: 1.1em;
	height: max-content;
	max-height: 58.5px;
	justify-content: ${({ isResponsive }) =>
		isResponsive ? "space-between" : "space-evenly"};
	padding: 0.8em;
	position: relative;
`;

const NavLink = styled(Link)<{ selected: boolean }>`
	background-color: inherit;
	color: ${({ theme, selected }) =>
		selected ? theme.buildColor("primary") : theme.buildColor("fontColor")};
	cursor: pointer;
	transition: color 200ms ease-in;
	&:hover{
		color: ${({ theme }) => theme.buildColor("primary")};
	}

`;

const NavContent = styled.div<{ isWatch: boolean }>`
	border-top: ${({ theme }) =>
		`.5px solid ${theme.buildColor("fontColor", 90)}`};
	gap: 1.5em;
	height:calc(100% - 58.5px);
	opacity: ${({ isWatch }) => (isWatch ? "1" : "0")};
	transform: ${({ isWatch }) =>
		isWatch ? "translateX(0px)" : "translateX(-100%)"};
	transition: all 500ms ease-in;
	position: fixed;
	width:100%;
`;
