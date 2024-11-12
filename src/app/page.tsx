import { prisma } from '../../lib/prisma';
import ResourceCard from '@/components/ResourceCard';
export default async function Home() {
	const resources = await prisma.resource.findMany();
	console.log(resources);
	return (
		<main className="">
			<ul>
				{resources?.map(resource => (
					<ResourceCard key={resource.id} {...resource} />
				))}
			</ul>
		</main>
	);
}
