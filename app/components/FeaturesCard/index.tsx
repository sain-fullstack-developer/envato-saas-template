import Images from "@/app/constants/Images";
import Image from "next/image";
import React from "react";

type Props = {
	altText: string;
	title: string;
	description: string;
	logoUrl: string;
};

const FeaturesCard = (props: Props) => {
	const { altText, title, description, logoUrl } = props;
	return (
		<div className="w-full flex flex-col gap-5">
			<Image
				src={logoUrl}
				width={48}
				height={48}
				alt={altText}
				className="cursor-pointer"
			/>
			<p className="text-3xl font-bold">{title}</p>
			<p className="text-paragraph leading-paragraph">{description}</p>
		</div>
	);
};

export default FeaturesCard;
