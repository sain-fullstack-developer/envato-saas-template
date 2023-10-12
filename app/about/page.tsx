import React from "react";
import HeadingText from "../components/HeadingText/HeadingText";
import Images from "../constants/Images";
import Image from "next/image";
import ImageCard from "../components/ImageCard";
import {
	aboutCorporateValuesData,
	aboutTeamData,
	imageProducts,
} from "../constants";
import FeaturesCard from "../components/FeaturesCard";
import ReadyToGrow from "../components/ReadyToGrow";

const About = () => {
	return (
		<main
			className={`flex min-h-screen flex-col gap-y-32 items-center justify-center p-8 sm:p-14 lg:p-24`}>
			<section className="flex flex-col gap-8 sm:gap-12 relative">
				<Image
					src={Images.gradientBg}
					className="absolute inset-0 tranform -z-10"
					width={800}
					height={800}
					alt="gradient-background"
				/>
				<HeadingText
					mainHeading="We are proud of our products"
					description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
				/>
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{imageProducts.map((image, index) => {
						return (
							<ImageCard
								key={index}
								priority={true}
								imageUrl={image.product}
								isImageOnly
							/>
						);
					})}
				</div>
			</section>
			<section>
				<HeadingText
					caption="About Us"
					title="We’re a team of data analysts"
					description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
				/>
			</section>
			<section className="grid md:grid-cols-2 gap-16 bg-tertiary p-6 sm:p-8 lg:p-16 rounded-3xl ">
				<HeadingText
					placeLeft={true}
					caption="Our Goals"
					title="To upscale your business
					to the next level"
					description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
				/>
				<HeadingText
					placeLeft={true}
					caption="Our Vision"
					title="To provide solutions for growing companies"
					description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
				/>
			</section>
			<section className="">
				<HeadingText
					title="Our corporate values"
					description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
				/>
				<div className="bg-[#F9F0FB] rounded-3xl grid sm:grid-cols-2 lg:grid-cols-3 gap-12 p-8 sm:p-12 lg:p-16">
					{aboutCorporateValuesData.map((list, index) => {
						return (
							<FeaturesCard
								key={index}
								logoUrl={list.logo}
								altText={`corporate-values-reference-log-${index}`}
								title={list.title}
								description={list.text}
							/>
						);
					})}
				</div>
			</section>
			<section className="grid lg:grid-cols-custom1 gap-12">
				<div>
					<HeadingText
						placeLeft={true}
						title="Our talented Team"
						description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore."
					/>
				</div>
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{aboutTeamData.map((team, index) => {
						return (
							<ImageCard
								key={index}
								team={true}
								imageUrl={team.logo}
								title={team.fullname}
								text={team.designation}
								altText={`about-teams-profile-${index}`}
							/>
						);
					})}
				</div>
			</section>
			<ReadyToGrow />
		</main>
	);
};

export default About;
