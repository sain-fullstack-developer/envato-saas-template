import Images from "@/app/constants/Images";
import Image from "next/image";
import React from "react";

type Props = {
	title?: string;
	iconSrc: string;
	description: string;
	iconAltText: string;
};

const IconText = (props: Props) => {
	const { title, iconSrc, description, iconAltText } = props;
	return (
		<div className="flex flex-col sm:flex-row gap-4 w-full items-center">
			<Image
				src={iconSrc}
				width={48}
				height={48}
				alt={iconAltText}
				className="cursor-pointer"
			/>
			<div>
				{title && (
					<h4 className="text-h4 leading-h4 pb-2 font-bold">{title}</h4>
				)}
				<p className={`text-xl ${title ? "font-base" : "font-medium"}`}>
					{description}
				</p>
			</div>
		</div>
	);
};

export default IconText;
