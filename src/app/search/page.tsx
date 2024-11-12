'use client';
import { useSearchParams } from 'next/navigation';

export default function SearchPage() {
	const search = useSearchParams();
	const searchQuery = search ? search.get('q') : null;
	const encodedSearchQuery = encodeURI(searchQuery || '');
	return <div>SEARCH PAGE {encodedSearchQuery}</div>;
}
