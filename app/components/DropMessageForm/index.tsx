import React, { ChangeEvent } from "react";
import HeadingText from "../HeadingText/HeadingText";
import CustomTextField from "../TextField";
import Button from "../Button/Button";

type Props = {
	fullname: string;
	companyname: string;
	workEmail: string;
	subject: string;
	message: string;
};

const DropMessageForm = (props: Props) => {
	const { fullname, companyname, workEmail, subject, message } = props;
	const [messageDetails, setMessageDetails] = React.useState({
		fullname,
		companyname,
		workEmail,
		subject,
		message,
	});

	const handleChange = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setMessageDetails({
			...messageDetails,
			[event?.target?.name]: event?.target?.value,
		});
	};
	return (
		<div>
			<div className="pb-4">
				<HeadingText
					placeLeft
					title="Drop us a message"
					description="We will get back to you as soon as possible."
				/>
			</div>
			<form className="">
				<div className="flex flex-col md:flex-row gap-4 pb-4">
					<CustomTextField
						placeholder="Full name"
						title="Full Name"
						value={messageDetails.fullname}
						name="fullname"
						onChange={handleChange}
					/>
					<CustomTextField
						placeholder="Company Name"
						title="Company Name"
						value={messageDetails.companyname}
						name="companyname"
						onChange={handleChange}
					/>
				</div>
				<div className="pb-4">
					<CustomTextField
						placeholder="Work email"
						title="Work email"
						value={messageDetails.workEmail}
						name="workEmail"
						onChange={handleChange}
					/>
				</div>
				<div className="pb-4">
					<CustomTextField
						placeholder="Subject"
						title="Subject"
						value={messageDetails.subject}
						name="subject"
						onChange={handleChange}
					/>
				</div>
				<div className="pb-4">
					<textarea
						className="bg-white outline-none rounded-lg py-5 px-6 w-full"
						placeholder="Message"
						title="Message"
						value={messageDetails.message}
						name="message"
						onChange={handleChange}
					/>
				</div>
				<div className="w-full">
					<Button>Send</Button>
				</div>
			</form>
		</div>
	);
};

export default DropMessageForm;
