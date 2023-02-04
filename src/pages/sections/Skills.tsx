import styled from "styled-components";

export default function () {
	return (
		<Content className="flex-row">
			<ContentText>
				Hello! I'm Dikson Aranda, and I am a Frontend Developer. I am eager to
				apply my knowledge and put my training into practice in the professional
				world. I developed some projects, where I improve my skills. I am a
				quick learner, a team player, and I am always looking for ways to expand
				my horizons and challenge myself. I am excited to see where my training
				and passion will take me, and I am open to exploring new opportunities
				and possibilities.
			</ContentText>
			<ContentImg>IMG</ContentImg>
		</Content>
	);
}

const ContentText = styled.p`
  outline: 1px solid orange;
  flex: 2;
`;

const ContentImg = styled.div`
  outline: 1px solid cyan;
  flex: 1;
`;

const Content = styled.div`
  padding: 0.3em;
  outline: 1px solid red;
  margin-top: 2em;
  gap: 1em;
`;
