'use client';
import ResourceCard from '@/components/ResourceCard';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Prisma } from '@prisma/client';

type ResourceWithRelations = Prisma.ResourceGetPayload<{
	include: {
		trainings: true;
		contacts: true;
	};
}>;

export default function Home() {
	const { data: resourceTags, isLoading: isLoadingTags } = useQuery<
		ResourceWithRelations[]
	>({
		queryKey: ['resources'],
		queryFn: async () => {
			const response = await axios.get('/api/resources');
			return response.data;
		},
	});
	console.log(resourceTags);
	return (
		<div className="">
			<section id="about" className="m-4">
				<section className="text-black">
					<h2 className="mb-4">About</h2>
					<p className="mb-4 text-black">
						The Indigenous Data Review Project aims to bring together relevant
						datasets from federal, state, academic, and other sources into an
						organized, searchable list. In conjunction, it offers users the
						ability to explore, comment, and discuss real-world experiences
						utilizing the data resource.
					</p>
					<p className="mb-4 text-black">
						The project&apos;s goal is to foster collaboration and community
						among Indigenous-centered not-for-profit organizations in their
						data-driven initiatives.
					</p>
					<p className="text-black">
						Feedback is welcome to improve the platform and its usefulness.
					</p>
				</section>
			</section>

			<section id="contact" className="m-4">
				<h2 className="text-black">Contact</h2>
				<p className="text-black">contact@mewdev.nyc</p>
			</section>

			<section id="resources" className="m-4">
				<h2 className="">Resources</h2>
				<div className="grid grid-cols-1 gap-4">
					{isLoadingTags ? (
						'Loading...'
					) : (
						<>
							{resourceTags?.map(resource => (
								<ResourceCard key={resource.id} {...resource} />
							))}
						</>
					)}
				</div>
			</section>
		</div>
	);
}
