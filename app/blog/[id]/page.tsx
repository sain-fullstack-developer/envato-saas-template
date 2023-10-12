"use client";
import HeadingText from "@/app/components/HeadingText/HeadingText";
import ImageCard from "@/app/components/ImageCard";
import ReadyToGrow from "@/app/components/ReadyToGrow";
import { blogPostsData } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const BlogPost = () => {
	const { id }: any = useParams();
	const index = parseInt(id);
	const {
		title,
		author,
		logo,
		headlineTitle1,
		headlineTitle2,
		headlineDescription1,
		headlineDescription2,
	} = blogPostsData[index];
	return (
		<main className={`flex flex-col gap-y-32 p-8 sm:p-14 lg:p-24`}>
			<section className="flex flex-col gap-10 md:gap-20">
				<HeadingText title={title}>{author}</HeadingText>
				<div>
					<Image
						src={logo}
						alt="blog-post-reference"
						height={512}
						width={1280}
						priority
						className="rounded-xl"
					/>
				</div>
			</section>
			<section className="flex flex-col gap-7">
				<HeadingText
					title={headlineTitle1}
					description={headlineDescription1}
				/>
				<HeadingText
					title={headlineTitle2}
					description={headlineDescription2}
				/>
			</section>
			<section className="flex flex-col gap-12">
				<HeadingText title="Read more posts" />
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
					{blogPostsData?.slice(0, 3)?.map((card, index) => {
						return (
							<Link key={index} href={`blog/${index}`}>
								<ImageCard
									imageUrl={card.logo}
									title={card.title}
									text={card.text}
									author={card.author}
									altText={`blog-posts-card-pic-${index}`}
								/>
							</Link>
						);
					})}
				</div>
			</section>
			<ReadyToGrow />
		</main>
	);
};

export default BlogPost;
