'use client';
import { useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function SearchPage() {
	const search = useSearchParams();
	const searchQuery = search ? search.get('q') : null;
	const encodedSearchQuery = encodeURI(searchQuery || '');
	console.log(encodedSearchQuery);

	const { data, isLoading } = useQuery({
		queryKey: ['resources'],
		queryFn: async () => {
			const response = await axios.get('/api/search');
			return response.data;
		},
	});
	console.log(data);

	return isLoading ? (
		<div>SEARCH PAGE {encodedSearchQuery}</div>
	) : (
		<p>Loading</p>
	);
}
