import React from "react";
import HeadingText from "../components/HeadingText/HeadingText";
import Image from "next/image";
import Button from "../components/Button/Button";
import { featuresCardData, logoImages, productServiceData } from "../constants";
import FeaturesCard from "../components/FeaturesCard";
import Images from "../constants/Images";
import ReadyToGrow from "../components/ReadyToGrow";

type Props = {};

const Product = (props: Props) => {
	return (
		<main
			className={`flex min-h-screen flex-col gap-y-32 items-center justify-between p-8 sm:p-14 md:p-24`}>
			<section className="grid lg:grid-cols-2 gap-12">
				<HeadingText
					placeLeft
					mainHeading="Grow your Sales and Services"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.">
					<div className="flex gap-4">
						<Button>Get Started</Button>
						<Button outline={true}>Contact us</Button>
					</div>
				</HeadingText>
				<Image
					src="/home-dashboard.svg"
					width={1024}
					height={666}
					alt="dashboard"
					className="rounded-2xl"
				/>
			</section>
			<section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-20">
				{logoImages.map((list, index) => {
					return (
						<Image
							src={list.logo}
							alt={`company-logos-${index}`}
							width={196}
							height={40}
						/>
					);
				})}
			</section>
			<section className="flex flex-col gap-12 p-6 sm:p-8 lg:p-20 rounded-2xl bg-tertiary">
				<HeadingText title="Get the best out of your company with our service" />
				<div className="bg-white p-9 lg:p-16 rounded-3xl grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
					{productServiceData.map((service, index) => {
						return (
							<FeaturesCard
								logoUrl={service.logo}
								title={service.title}
								description={service.text}
								altText={`product-services-log-${index}`}
							/>
						);
					})}
				</div>
			</section>
			<section className="grid gap-9 lg:grid-cols-2 lg:gap-20 rounded-2xl">
				<HeadingText
					placeLeft={true}
					caption="Marketing insights"
					title="Data-driven client feedback"
					description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."
				/>
				<Image
					src={Images.productservicelg}
					width={1024}
					height={666}
					alt="dashboard"
					className="rounded-2xl"
				/>
			</section>
			<section className="grid gap-9 lg:grid-cols-2 lg:gap-20 rounded-2xl">
				<Image
					src={Images.productservicelg2}
					width={1024}
					height={666}
					alt="dashboard"
					className="rounded-2xl"
				/>
				<HeadingText
					placeLeft={true}
					caption="Time tracker"
					title="Track your project performance"
					description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."
				/>
			</section>
			<section className="grid gap-9 lg:grid-cols-2 lg:gap-20 rounded-2xl">
				<HeadingText
					placeLeft={true}
					caption="Lead Generation"
					title="More leads that convert"
					description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."
				/>
				<Image
					src={Images.productservicelg}
					width={1024}
					height={666}
					alt="dashboard"
					className="rounded-2xl"
				/>
			</section>
			<section className="grid gap-9 lg:grid-cols-2 lg:gap-20 rounded-2xl">
				<Image
					src={Images.productservicelg2}
					width={1024}
					height={666}
					alt="dashboard"
					className="rounded-2xl"
				/>
				<HeadingText
					placeLeft={true}
					caption="Remote teams"
					title="Real-time collaboration"
					description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."
				/>
			</section>
			<section className="flex flex-col">
				<HeadingText title="Features" />
				<div className="bg-tertiary rounded-3xl p-8 sm:p-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
					{featuresCardData.map((feature, index) => {
						return (
							<FeaturesCard
								key={index}
								logoUrl={feature.logo}
								title={feature.title}
								description={feature.text}
								altText={`fetures-card-logo-${index}`}
							/>
						);
					})}
				</div>
			</section>
			<ReadyToGrow />
		</main>
	);
};

export default Product;
