import React from "react";
import styled, { keyframes } from "styled-components";
import { tada, swing } from "react-animations";

function FirstLook() {
	return (
		<FirstLookWrapper id="home">
			<Details url={`./assets/images/background-2.jpg`}>
				<Overlay></Overlay>

				<InfoBox>
					<div>
						<GreetDiv>
							<span>Hello</span>
							<WaveHandBox className="tada">
								<img
									src="./assets/images/first-look/waving-hand.png"
									alt="wave hand"
								/>
							</WaveHandBox>
							<Comma>,</Comma>I am
						</GreetDiv>

						<NameHeading>Mohd Rihan Khan</NameHeading>
						<SkillBox>Full Stack Developer</SkillBox>

						<ContactBox>
							<ATag href="https://twitter.com/MohdRih06409125" target="_blank">
								<TwitterIcon
									src={"./assets/svgs/twitterIcon.svg"}
									alt="Twitter Icon"
								/>
							</ATag>

							<ATag
								href="https://www.linkedin.com/in/mohd-rihan-khan-6105a2173/"
								target="_blank">
								<LinkedInIcon
									src={"./assets/svgs/linkedinIcon.svg"}
									alt="Linkedin Icon"
								/>
							</ATag>

							<ATag href="https://github.com/iMrihan" target="_blank">
								<GithubIcon
									src={"./assets/svgs/githubIcon.svg"}
									alt="Github Icon"
								/>
							</ATag>
						</ContactBox>
					</div>
				</InfoBox>
			</Details>
		</FirstLookWrapper>
	);
}

interface FirstLookProps {
	url: string;
}

const FirstLookWrapper = styled.div`
	padding-top: 5rem;
	height: 70vh;
	background-color: #f4f4f4;

	@media only screen and (max-width: 680px) {
		height: 50vh;
	}

	@media only screen and (max-width: 480px) {
		height: 35vh;
	}
`;

const tadaAnimation = keyframes`${swing}`;

const WaveHandBox = styled.span`
	display: inline-block;
	width: 40px;
	margin-left: 5px;

	img {
		width: 100%;
		object-fit: contain;
	}

	@media only screen and (max-width: 680px) {
		width: 35px;
	}

	@media only screen and (max-width: 480px) {
		width: 28px;
	}

	@media only screen and (max-width: 320px) {
		width: 20px;
	}
`;

const Comma = styled.span`
	margin-right: 20px;
`;

const ATag = styled.a`
	margin: 0 10px;
	width: 35px;
`;

const Details = styled.div`
	background-image: url(${(props: FirstLookProps) => props.url});
	width: 100%;
	height: 65vh;
	background-size: 100%;
	background-position: center;
	background-repeat: no-repeat;

	&:hover .tada {
		animation-name: ${tadaAnimation};
		animation: 0.8s ${tadaAnimation} ease-in-out;
	}

	@media only screen and (max-width: 680px) {
		height: 45vh;
		background-position: cover;
	}

	@media only screen and (max-width: 480) {
		height: 35vh;
	}

	@media only screen and (max-width: 320px) {
		height: 38vh;
	}
`;

const Overlay = styled.div`
	width: 100%;
	position: absolute;
	height: 65vh;
	background-color: #00000061;

	@media only screen and (max-width: 680px) {
		height: 45vh;
	}

	@media only screen and (max-width: 480px) {
		height: 36vh;
	}

	@media only screen and (max-width: 320px) {
		height: 33vh;
	}
`;

const InfoBox = styled.div`
	position: absolute;
	z-index: 100;
	color: #fff;
	width: 100%;
	height: 65vh;
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const GreetDiv = styled.div`
	font-family: "Gloria Hallelujah", cursive;
	font-size: 1.5rem;
	margin: 4rem 0 20px;
	font-weight: bold;

	@media only screen and (max-width: 568px) {
		font-size: 1rem;
		margin: 4rem 0 10px;
	}
`;

const NameHeading = styled.h2`
	font-size: 3.5rem;
	font-family: "Fredoka One", cursive;

	@media only screen and (max-width: 680px) {
		font-size: 3rem;
	}

	@media only screen and (max-width: 568px) {
		font-size: 2.5rem;
	}

	@media only screen and (max-width: 480px) {
		font-size: 2rem;
	}

	@media only screen and (max-width: 320px) {
		font-size: 1.5rem;
	}
`;

const SkillBox = styled.p`
	font-family: "Gloria Hallelujah", cursive;
	font-size: 1.5rem;
	margin: 10px 0;
	font-weight: bold;

	@media only screen and (max-width: 568px) {
		font-size: 1rem;
	}
`;

const ContactBox = styled.div`
	margin-top: 2.5rem;
	height: 40px;
	display: flex;
	align-items: center;

	@media only screen and (max-width: 568px) {
		margin-top: 1.5rem;
	}
`;

const ImgTag = styled.img`
	width: 30px;
	transition: 0.15s;

	&:hover {
		width: 35px;
		transition: 0.15s;
	}
`;

const TwitterIcon = styled(ImgTag)``;

const LinkedInIcon = styled(ImgTag)``;

const GithubIcon = styled(ImgTag)``;

export default FirstLook;
