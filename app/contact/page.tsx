import React from "react";
import HeadingText from "../components/HeadingText/HeadingText";
import DropMessageForm from "../components/DropMessageForm";
import { contactData } from "../constants";
import IconText from "../components/IconText/IconText";
import ReadyToGrow from "../components/ReadyToGrow";

type Props = {};

const page = (props: Props) => {
	return (
		<main
			className={`flex min-h-screen flex-col gap-y-32 items-center justify-center p-8 sm:p-14 lg:p-24`}>
			<section className="w-full lg:min-h-screen flex flex-col gap-2 relative">
				<HeadingText mainHeading="Get in touch with us" />
				<div className="grid lg:grid-cols-2 gap-16 bg-[#F0F2FE] rounded-3xl p-8 lg:p-16">
					<DropMessageForm />
					<div className="flex flex-col gap-7 justify-center items-center place-self-center">
						{contactData.map((contact, index) => {
							return (
								<IconText
									key={index}
									iconSrc={contact.logo}
									title={contact.title}
									description={contact.text}
									iconAltText={`contact-reference-logo-${index}`}
								/>
							);
						})}
					</div>
				</div>
			</section>
			<ReadyToGrow />
		</main>
	);
};

export default page;
