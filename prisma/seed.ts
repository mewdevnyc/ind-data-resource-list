import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';

const prisma = new PrismaClient();

interface Contact {
	name: string;
	title: string;
	email?: string;
}

interface TrainingResource {
	title: string;
	description?: string;
	url?: string;
}

async function main() {
	// Read the JSON file
	const data = JSON.parse(fs.readFileSync('prisma/data.json', 'utf-8'));

	// Iterate through resources and seed data
	for (const resourceData of data.resources) {
		// Create resource with contacts and trainings
		await prisma.resource.create({
			data: {
				title: resourceData.title,
				organization: resourceData.organization,
				type: resourceData.type,
				description: resourceData.description,
				url: resourceData.url,
				contacts: {
					create: resourceData.contacts.map((contact: Contact) => ({
						name: contact.name,
						title: contact.title ? contact.title : '',
						email: contact.email,
					})),
				},
				trainings: {
					create: resourceData.trainings.map((training: TrainingResource) => ({
						title: training.title,
						description: training.description,
						url: training.url,
					})),
				},
			},
		});
	}
}

main()
	.then(async () => {
		console.log('Seeding complete!');
		await prisma.$disconnect();
	})
	.catch(async e => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
