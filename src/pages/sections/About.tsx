import styled from "styled-components";

export default function () {
	return (
		<Content className="flex-row">
			<ContentText className="flex-col">
				<p>
					Hello!. I'm Dikson Aranda, Frontend Developer. I am passionate about
					building great things on the web and creating while learning a new
					technology.
				</p>
				<p>
					I am a graduate of Henry bootcamp where I learned about all
					technologies within FullStack like frontend and some backend. During
					the program I saw Html, Css, Javascript, React and NodeJs (Express),
					building some projects alone and in a team.
				</p>
				<p>
					Also, recently I have been learning more about rust and its ecosystem.
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
