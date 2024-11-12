'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SearchInput() {
	const [searchQuery, setSearchQuery] = useState('');
	const router = useRouter();

	const onSearch = (event: React.FormEvent) => {
		event.preventDefault();
		const encodedSearchQuery = encodeURI(searchQuery);
		router.push(`/search?q=${encodedSearchQuery}`);
		console.log(encodedSearchQuery);
	};
	return (
		<form onSubmit={onSearch}>
			<input
				type={searchQuery}
				onChange={event => setSearchQuery(event.target.value)}
				placeholder="Search..."
			/>
		</form>
	);
}
