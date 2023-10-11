import React from "react";
import IconText from "../IconText/IconText";
import Images from "@/app/constants/Images";
import Image from "next/image";
import Button from "../Button/Button";

type Props = {
	title: string;
	subTitle: string;
	pricingCardList: [{ feature: string }];
	description: string;
	price: string;
	billing: string;
	iconSrc: string;
	iconAltText: string;
};

const PricingCard = (props: Props) => {
	const {
		title,
		subTitle,
		pricingCardList,
		description,
		price,
		billing,
		iconSrc,
		iconAltText,
	} = props;
	return (
		<div className=" p-6 sm:p-12 bg-gradient-blue w-full h-[714px] rounded-3xl">
			<div className="flex flex-col gap-8">
				<div className="">
					<IconText
						iconAltText={iconAltText}
						title={title}
						description={subTitle}
						iconSrc={iconSrc}
					/>
				</div>
				<div className="h-[1px] bg-[#D8D8D8] w-full"></div>
				{pricingCardList?.map((price, index) => {
					return (
						<>
							<p className="flex gap-2 items-center">
								<Image
									src={Images?.done}
									width={24}
									height={24}
									alt="done-icon"
									className="cursor-pointer"
								/>
								<span>{price?.feature}</span>
							</p>
						</>
					);
				})}

				<p className="text-center">{description}</p>
				<div className="pt-6 flex flex-col gap-6 w-full max-w-[140px] m-auto">
					<div className="text-center">
						<h3 className="text-h3 leading-h3 font-bold">{price}</h3>
						<p>{billing}</p>
					</div>
					<Button>Get Started</Button>
				</div>
			</div>
		</div>
	);
};

export default PricingCard;
