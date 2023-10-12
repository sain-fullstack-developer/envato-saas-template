import React, { ReactNode } from "react";

type Props = {
	children?: ReactNode;
	caption?: string;
	mainHeading?: string;
	title?: string;
	description?: string;
	placeLeft?: boolean;
};

const HeadingText = (props: Props) => {
	const { children, caption, mainHeading, title, description, placeLeft } =
		props;
	return (
		<div
			className={`${
				placeLeft
					? "flex flex-col w-full max-w-[800px] m-auto text-center sm:text-left"
					: "flex flex-col w-full max-w-[800px] m-auto text-center"
			}`}>
			{caption && (
				<h4 className="text-lg sm:text-headingLabel leading-headingLabel text-gradient-primary pb-6">
					{caption}
				</h4>
			)}
			{mainHeading ? (
				<h1 className="text-4xl sm:text-h1 sm:leading-h1 font-bold pb-8">
					{mainHeading}
				</h1>
			) : (
				<h2
					className={`text-2xl 
					
					 sm:text-h2 sm:leading-h2 font-bold pb-8`}>
					{title}
				</h2>
			)}

			<p className={`text-paragraphLarge leading-paragraphLarge pb-12`}>
				{description}
			</p>
			{children ? children : null}
		</div>
	);
};

export default HeadingText;
