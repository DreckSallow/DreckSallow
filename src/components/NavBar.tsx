import React, { useState, useCallback, useRef, useEffect } from "react";
import styled from "styled-components";
import { useLocalRouter } from "../context/router/localRouter";
import { Children } from "../interfaces";
import { MenuIcon, XIcon } from "./icons/Menu";

interface RouteLink {
	text?: string | JSX.Element | JSX.Element[];
	link: string;
}

interface LinkI extends RouteLink, Children {
	click(link: RouteLink["link"]): void;
	className?: string;
}

const Link = ({ link, text, click, className, children }: LinkI) => {
	return (
		// rome-ignore lint/a11y/useValidAnchor: <explanation>
		<a
			href={link}
			className={className}
			tabIndex={0}
			onClick={(e) => {
				e.preventDefault();
				click(link);
			}}
		>
			{text ? text : children}
		</a>
	);
};

interface NavBarProps {
	className?: string;
	root: { link: string; el: React.ReactNode };
	routes: RouteLink[];
	isResponsive?: boolean;
}

export default function NavBar({
	root,
	routes,
	isResponsive,
	className,
}: NavBarProps) {
	const [displayContent, setDisplayContent] = useState(false);
	const { setLocalPath, compareHash } = useLocalRouter();
	const NavBarRef = useRef<null | HTMLElement>(null);

	const handleNavigation = useCallback(
		(link: string) => {
			setLocalPath(link);
			if (isResponsive) {
				setDisplayContent((p) => !p);
			}
		},
		[displayContent],
	);
	useEffect(() => {
		const changeHeight = (e: Event) => {
			if (!NavBarRef.current) return;
			if (document.body.getBoundingClientRect().top > -5) {
				NavBarRef.current.style.maxHeight = "58px";
			} else {
				NavBarRef.current.style.height = "70.5px";
				NavBarRef.current.style.maxHeight = "70.5px";
			}
		};

		window.addEventListener("scroll", changeHeight);

		return () => {
			window.removeEventListener("scroll", changeHeight);
		};
	}, []);

	return (
		<>
			<Nav
				className={`flex-row w-full ${className ?? ""}`}
				isResponsive={isResponsive ?? false}
				ref={NavBarRef}
			>
				<NavLink
					className="flex Root__Link"
					selected={false}
					click={setLocalPath}
					link={root.link}
				>
					{root.el}
				</NavLink>
				<div className="flex-row Nav__Links">
					{!isResponsive &&
						routes.map((r, i) => {
							return (
								<NavLink
									// rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									key={i}
									selected={compareHash(r.link)}
									click={setLocalPath}
									text={r.text}
									link={r.link}
								/>
							);
						})}
				</div>
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
							selected={compareHash(r.link)}
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

const Nav = styled.nav<{ isResponsive: boolean }>`
	align-items: center;
	background-color: ${({ theme }) => theme.buildColor("back", 2)};
	color: ${({ theme }) => theme.buildColor("fontColor")};
	font-size: 1.1em;
	height: max-content;
	max-height: 58.5px;
	justify-content: space-between;
	padding: 0.8em;
	position: fixed;
	top: 0;
	z-index: 100;
	transition: all 200ms ease-in;

	& .Root__Link{
		flex: 1;
		padding-left: 3em;
	}
	& .Nav__Links{
		flex:2;
		justify-content: space-between;
		padding-right: 3em;
	}
`;

const NavLink = styled(Link)<{ selected: boolean }>`
	background-color: inherit;
	color: ${({ theme, selected }) =>
		selected ? theme.buildColor("primary") : theme.buildColor("fontColor")};
	cursor: pointer;
	font-size: 0.9rem;
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
	margin-top: 58.5px;
	opacity: ${({ isWatch }) => (isWatch ? "1" : "0")};
	position: fixed;
	transform: ${({ isWatch }) =>
		isWatch ? "translateX(0px)" : "translateX(-100%)"};
	transition: all 500ms ease-in;
	width:100%;
	z-index:100;
`;
