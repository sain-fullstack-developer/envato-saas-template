import React from "react";
import HeadingText from "../components/HeadingText/HeadingText";
import Button from "../components/Button/Button";
import { faqCardData, pricingCardList } from "../constants";
import PricingCard from "../components/PricingCard";
import FaqCard from "../components/FaqCard";
import ReadyToGrow from "../components/ReadyToGrow";

type Props = {};

const Pricing = (props: Props) => {
	return (
		<main
			className={`flex min-h-screen flex-col gap-y-32 items-center justify-between p-8 sm:p-14 lg:p-24`}>
			<section className="flex flex-col gap-12">
				<div className="justify-items-start">
					<HeadingText
						title="Pricing plans that suit you"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.">
						<div className="bg-tertiary rounded-3xl p-2 flex justify-around w-1/2 m-auto">
							<Button>Monthly</Button>
							<Button outline={true}>
								<b>Yearly</b>
							</Button>
						</div>
					</HeadingText>
				</div>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{pricingCardList.map((price, index) => {
						return (
							<PricingCard
								key={index}
								iconSrc={price.logo}
								iconAltText={`pricing-reference-logo-${index}`}
								title={price.title}
								subTitle={price.subHeading}
								pricingCardList={price.fetures}
								description={price.text}
								price={price.price}
								billing={price.offerDuration}
							/>
						);
					})}
				</div>
			</section>
			<section className="grid lg:grid-cols-2 gap-12 bg-tertiary rounded-2xl p-8 md:p-16">
				<div>
					<HeadingText
						placeLeft={true}
						title="Frequestly Asked Questions"
						description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt."
					/>
				</div>
				<div className="flex flex-col gap-4">
					{faqCardData.map((faq, index) => {
						return (
							<FaqCard
								key={index}
								question={faq.question}
								answer={faq.answer}
							/>
						);
					})}
				</div>
			</section>
			<ReadyToGrow />
		</main>
	);
};

export default Pricing;
