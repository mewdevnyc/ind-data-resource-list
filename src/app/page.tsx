import { prisma } from '../../lib/prisma';
export default async function Home() {
	const resource = await prisma.resource.findMany({});
	console.log(resource);
	return <main className=""></main>;
}
