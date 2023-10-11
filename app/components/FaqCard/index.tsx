"use client";
import React, { useState, useRef } from "react";
import { GrFormSubtract } from "react-icons/gr";
import { IoIosAdd } from "react-icons/io";

type Props = {
	question: string;
	answer: string;
};

const FaqCard = (props: Props) => {
	const { question, answer } = props;
	const [openAnswer, setOpenAnswer] = useState(false);
	const answerRef = useRef<HTMLDivElement>(null);

	const toggleAnswer = () => {
		setOpenAnswer(!openAnswer);
	};

	return (
		<div
			className="cursor-pointer bg-white rounded-3xl p-10 w-full"
			onClick={toggleAnswer}>
			<div className=" mb-6">
				<div className="flex justify-between items-center">
					<div className="text-paragraphLarge leading-paragraphLarge font-bold">
						<p>{question}</p>
					</div>
					<div className="transform 0.3s ease-in-out">
						{openAnswer ? (
							<GrFormSubtract size="20px" />
						) : (
							<IoIosAdd size="20px" />
						)}
					</div>
				</div>
				{openAnswer && (
					<div
						className="trasnfrom transition-all ease-in-out delay-75"
						ref={answerRef}>
						<div className="pt-6">
							<p className="text-lg">{answer}</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default FaqCard;
