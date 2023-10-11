"use client";
import React from "react";
import { useTheme } from "next-themes";

type Props = {
	className?: string;
	children: any;
	type?: "button" | "reset" | "submit" | undefined;
	outline?: Boolean;
};

const Button = (props: Props) => {
	const { className, children, type, outline } = props;
	const { theme } = useTheme();
	return (
		<>
			{outline ? (
				<button
					role="button"
					type={type ? type : "button"}
					className={`${className} bg-none border-[2px] border-tertiary hover:bg-primary text-primary hover:text-white font-medium text-base p-2 rounded-xl outline-none cursor-pointer`}>
					{children}
				</button>
			) : (
				<button
					role="button"
					type={type ? type : "button"}
					className={`w-full ${
						className ? className : "w-[128px]"
					} bg-primary border-none  hover:bg-[#313852] text-white font-medium text-base p-2 rounded-xl outline-none cursor-pointer`}>
					{children}
				</button>
			)}
		</>
	);
};

export default Button;
