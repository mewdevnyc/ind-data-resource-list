'use client';
import ResourceCard from '@/components/ResourceCard';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Resource } from '@prisma/client';
export default function Home() {
	const { data: resourceTags, isLoading: isLoadingTags } = useQuery<Resource[]>(
		{
			queryKey: ['resources'],
			queryFn: async () => {
				const response = await axios.get('/api/resources');
				return response.data;
			},
		}
	);
	console.log(resourceTags);
	return (
		<section className="">
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
	);
}
