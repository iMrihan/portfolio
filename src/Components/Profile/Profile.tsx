import {
	faGithub,
	faLinkedin,
	faLinkedinIn,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import {
	faDownload,
	faEnvelope,
	faMapMarkerAlt,
	faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

export default function Profile() {
	return (
		<ProfileBox id="profile">
			<div>
				<PicBox>
					<img src={"./assets/images/rihanImage.jpeg"} alt="Rihan" />
				</PicBox>

				<DetailsBox>
					<NameBox>Mohd Rihan Khan</NameBox>

					<InfoBox>
						Analytical and detail-oriented Full Stack Web Developer who is
						proficient with the MERN stack and good at user-centric solutions.
						Collaborative, team player and proficient in working with
						interdisciplinary teams and executing goal-oriented projects.
						Strongly interested in obtaining a Software Developer position to
						work on enhancing the product experience.
					</InfoBox>

					<ContactBox>
						<p>
							<a
								href="mailto:mhd.khan.rihan@gmail.com"
								target="_blank"
								rel="noopener noreferrer">
								<FontAwesomeIcon icon={faEnvelope} />
								<span>mhd.khan.rihan@gmail.com</span>
							</a>
						</p>

						<p>
							<FontAwesomeIcon icon={faPhone} />
							<span>+91 8588963095</span>
						</p>

						<p>
							<FontAwesomeIcon icon={faMapMarkerAlt} />
							<span>Uttar Pradesh, India</span>
						</p>
					</ContactBox>

					<SocialLinkBox>
						<ATag href="https://twitter.com/MohdRih06409125" target="_blank">
							<FontAwesomeIcon icon={faTwitter} />
						</ATag>

						<ATag
							href="https://www.linkedin.com/in/mohd-rihan-khan-6105a2173/"
							target="_blank">
							<FontAwesomeIcon icon={faLinkedin} />
						</ATag>

						<ATag href="https://github.com/iMrihan" target="_blank">
							<FontAwesomeIcon icon={faGithub} />
						</ATag>
					</SocialLinkBox>

					<ResumeBox>
						<button>
							<a href="./assets/files/rihan_resume.pdf" download>
								<FontAwesomeIcon icon={faDownload} /> <span>Resume</span>
							</a>
						</button>
						<button>
							<a
								href="./assets/files/rihan_resume.pdf"
								target="_blank"
								rel="noopener noreferrer">
								<FontAwesomeIcon icon={faEye} />
								<span>Resume</span>
							</a>
						</button>
					</ResumeBox>
				</DetailsBox>
			</div>
		</ProfileBox>
	);
}

const ProfileBox = styled.div`
	padding: 3rem 0 0;
	background-color: #f4f4f4;

	& > div {
		display: grid;
		grid-template-columns: 0.5fr 1.5fr;
		width: 80%;
		margin: auto;
		justify-content: center;

		@media only screen and (max-width: 680px) {
			grid-template-columns: 1fr;
		}
	}

	@media only screen and (max-width: 912px) {
		padding: 2.5rem 0 0;
	}

	@media only screen and (max-width: 800px) {
		padding: 2rem 0 0;
	}

	@media only screen and (max-width: 680px) {
		padding: 1.5rem 0 0;
	}
`;

const PicBox = styled.section`
	padding: 20px 0;

	img {
		margin-left: 2rem;
		width: 90%;
		object-fit: contain;
		border-radius: 1%;
		overflow: hidden;
	}

	@media only screen and (max-width: 680px) {
		width: 50%;
	}
`;

const DetailsBox = styled.section`
	flex: 1;
	margin-left: 3rem;
	padding: 1rem 1rem 2rem;
	font-family: sans-serif;

	@media only screen and (max-width: 912px) {
		flex-basis: 40%;
	}

	@media only screen and (max-width: 800px) {
		flex-basis: 50%;
	}

	@media only screen and (max-width: 680px) {
		flex-basis: 70%;
		margin-left: 0;
	}
`;

const NameBox = styled.p`
	font-size: 3rem;
	color: #494949;
	margin-bottom: 20px;

	@media only screen and (max-width: 912px) {
		font-size: 2.5rem;
	}

	@media only screen and (max-width: 800px) {
		font-size: 2rem;
	}

	@media only screen and (max-width: 680px) {
		font-size: 1.5rem;
	}
`;

const InfoBox = styled.p`
	line-height: 18px;
	color: #686767;
	font-family: "Gothic A1", sans-serif;
	font-size: 15px;

	@media only screen and (max-width: 680px) {
		font-size: 14px;
		line-height: 18px;
	}
`;

const ContactBox = styled.div`
	/* border: 1px solid blue; */
	padding: 0.8rem 0;

	p {
		/* border: 1px solid red; */
		margin: 10px 0;
		display: flex;
		align-items: center;
		color: #302f2f;

		a {
			text-decoration: none;
			color: #302f2f;
			/* color: black; */
			display: flex;
			align-items: center;
		}

		&:hover svg {
			color: #027777;
		}
	}

	svg {
		/* border: 1px solid yellow; */
		font-size: 25px;
		margin-right: 20px;
		color: #4c4c4c;
	}

	@media only screen and (max-width: 680px) {
		p {
			margin: 5px 0;
		}
	}
`;

const SocialLinkBox = styled.div`
	/* border: 1px solid blue; */
	height: 28px;
	display: flex;
	align-items: center;
`;

const ATag = styled.a`
	width: 25px;
	display: inline-block;
	font-size: 23px;
	margin: 5px 15px 5px 0;
	transition: 0.1s;
	text-decoration: none;
	color: #4c4c4c;

	&:hover {
		font-size: 25px;
		transition: 0.1s;
	}
`;

const ResumeBox = styled.div`
	/* border: 1px solid red; */
	margin-top: 1rem;

	a {
		text-decoration: none;
		font-size: 16px;
		color: #302f2f;
		transition: 0.1s;
	}

	button {
		background-color: #fff;
		box-shadow: 4px 3px 4px 2px #7b7a7a;
		border: 1px solid #7b7a7a;
		border-radius: 4px;
		outline: none;
		padding: 3px;
		margin-right: 2rem;
		transition: 0.2s;

		&:hover {
			box-shadow: 2px 2px 4px 0px #7b7a7a;
			transition: 0.2s;
		}

		&:hover svg,
		&:hover a {
			color: #027777;
			transition: 0.1s;
		}
	}

	span {
	}

	svg {
		color: #4c4c4c;
		margin-right: 5px;
		font-size: 18px;
		transition: 0.1s;
	}

	@media only screen and (max-width: 680px) {
		button {
			margin-right: 20px;
		}
	}
`;
