import styled from "styled-components";
import Card from "../../components/Card";
import {
	CssIcon,
	HtmlIcon,
	JavascriptIcon,
	TypescriptIcon,
	NodeJsIcon,
	RustIcon,
	ReactIcon,
	Svelte,
} from "../../components/icons/Tech";

export default function () {
	return (
		<Content className="flex flex-center">
			<CardSkill
				className="flex-col"
				iconFill="#dd4b25"
				text="HTML"
				icon={<HtmlIcon width={100} height={100} />}
			/>
			<CardSkill
				className="flex-col"
				iconFill="#378acd"
				text="CSS"
				icon={<CssIcon width={100} height={100} />}
			/>
			<CardSkill
				className="flex-col"
				iconFill="#efd81d"
				text="Js"
				icon={<JavascriptIcon width={100} height={100} />}
			/>
			<CardSkill
				className="flex-col"
				iconFill="#3178c6"
				text="Ts"
				icon={<TypescriptIcon width={100} height={100} />}
			/>
			<CardSkill
				className="flex-col"
				iconFill="#5ed3f3"
				text="React"
				icon={<ReactIcon width={100} height={100} />}
			/>
			<CardSkill
				className="flex-col"
				iconFill="#f73c00"
				text="Svelte"
				icon={<Svelte width={100} height={100} />}
			/>
			<CardSkill
				className="flex-col"
				iconFill="#509941"
				text="NodeJs"
				icon={<NodeJsIcon width={100} height={100} />}
			/>
			<CardSkill
				className="flex-col"
				text="Rust"
				icon={<RustIcon width={100} height={100} />}
			/>
		</Content>
	);
}

interface CardSkillProps {
	className?: string;
	iconFill?: string;
	iconHoverFill?: string;
	text: string;
	icon: JSX.Element;
}

export const CardSkill = ({ text, icon, ...card }: CardSkillProps) => {
	return (
		<CustomCard {...card}>
			{icon}
			<p className="flex flex-center">{text}</p>
		</CustomCard>
	);
};

const Content = styled.div`
	flex-wrap: wrap;
  gap: 3em;
  margin-top: 2em;
`;

const CustomCard = styled(Card)<{ iconFill?: string; iconHoverFill?: string }>`
	background-color: ${({ theme }) => theme.buildColor("back", 10, 80)};
	box-shadow:  rgb(0 0 0 / 10%) 0px 5px 10px;
		-webkit-box-shadow:  rgb(0 0 0 / 10%) 0px 5px 10px;
		-moz-box-shadow:  rgb(0 0 0 / 10%) 0px 5px 10px;
	display: flex;
	transition: all 150ms ease-in;

 & svg{
	fill: ${({ iconFill }) => (iconFill ? iconFill : "black")};
 }

 & svg:hover{
	fill: ${({ iconHoverFill, iconFill }) =>
		iconHoverFill ? iconHoverFill : iconFill};
 }

 &:hover{
	box-shadow:  rgb(0 0 0 / 20%) 0px 5px 10px;
		-webkit-box-shadow:  rgb(0 0 0 / 20%) 0px 5px 10px;
		-moz-box-shadow:  rgb(0 0 0 / 20%) 0px 5px 10px;
	transform: translateY(-4px);
 }
`;
