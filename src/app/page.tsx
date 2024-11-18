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
		<main className="">
			{isLoadingTags ? (
				'Loading...'
			) : (
				<div>
					{resourceTags?.map(resource => (
						<ResourceCard key={resource.id} {...resource} />
					))}
				</div>
			)}
		</main>
	);
}
