import styled from "styled-components";

interface CardProps {
	children: string | JSX.Element | JSX.Element[];
	className?: string;
}

export default function ({ children, className }: CardProps) {
	return <Card className={className}>{children}</Card>;
}

const Card = styled.div`
  border-radius: 5px;
  padding: 0.3em;
`;
