import { db } from '../../lib/prisma';
import ResourceCard from '@/components/ResourceCard';
import SearchInput from '@/components/SearchInput';

export default async function Home() {
	const resources = await db.resource.findMany();

	return (
		<main className="">
			<ul>
				<SearchInput />
				{resources?.map(resource => (
					<ResourceCard key={resource.id} {...resource} />
				))}
			</ul>
		</main>
	);
}
