import styled from "styled-components";

export default function () {
	return (
		<Content className="flex-row">
			<ContentText className="flex-col">
				<p>
					Hello!. I'm Dikson Aranda, <b>Frontend Developer</b>. I am passionate
					about building great things on the web and creating while learning a
					new technology.
				</p>
				<p>
					I am a graduate of <b>Henry bootcamp</b> where I learned about all
					technologies within FullStack like frontend and some backend. During
					the program I saw Html, Css, Javascript, React and NodeJs (Express),
					building some projects alone and in a team.
				</p>
				<p>
					Also, recently I have been learning more about <b>Rust</b> and its
					ecosystem.
				</p>
				<p>
					I am A-2 in English and I am starting to translate articles about Free
					Code Camp, mainly to learn and improve. You can get more information
					about my translated articles on my{" "}
					<a
						href="https://www.freecodecamp.org/espanol/news/author/dreck/"
						target="_blank"
						rel="noreferrer"
					>
						profile
					</a>
					.
				</p>
			</ContentText>
			<ContentImg className="flex flex-center">
				<div>
					<img
						src="https://avatars.githubusercontent.com/u/86900322?v=4"
						alt="avatar"
					/>
				</div>
			</ContentImg>
		</Content>
	);
}

const ContentText = styled.div`
  padding: 0.5em;
  flex: 2;
  gap: 0.7em;
	& b, a{
		color: ${({ theme }) => theme.buildColor("primary", 0, 80)};
		font-weight: 600;
	}
	& a:hover{
		box-shadow: ${({ theme }) =>
			`0 1px 0 ${theme.buildColor("primary", 10, 80)}`};
	}
`;

const ContentImg = styled.div`
  flex: 1;
  
  &  img{
    object-fit: contain;
    max-height: 100%;
    aspect-ratio: 1;
  }
  & > div{
    aspect-ratio: 1;
    border-radius:50%;
    max-height: 200px;
  }

`;

const Content = styled.div`
  margin-top: 2em;
  gap: 4em;

  @media (max-width:425px) {
    gap: .5em;
  }
  @media (max-width: 600px){
    gap: 2em;
    flex-direction: column;
  }

`;
