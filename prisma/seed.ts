// prisma/seed.ts

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main(): Promise<void> {
	// Create Contacts
	const contact1 = await prisma.contact.create({
		data: {
			name: 'Alice Anderson',
			email: 'alice@example.com',
			phone: '123-456-7890',
		},
	});

	const contact2 = await prisma.contact.create({
		data: {
			name: 'Bob Brown',
			email: 'bob@example.com',
			phone: '987-654-3210',
		},
	});

	// Create Nations
	const nation1 = await prisma.nation.create({
		data: {
			name: 'NationA',
		},
	});

	const nation2 = await prisma.nation.create({
		data: {
			name: 'NationB',
		},
	});

	// Create Attribute Tags
	const attributeTag1 = await prisma.attributeTag.create({
		data: {
			name: 'AttributeX',
		},
	});

	const attributeTag2 = await prisma.attributeTag.create({
		data: {
			name: 'AttributeY',
		},
	});

	// Create Geographic Tags
	const geographicTag1 = await prisma.geographicTag.create({
		data: {
			name: 'Region1',
		},
	});

	const geographicTag2 = await prisma.geographicTag.create({
		data: {
			name: 'Region2',
		},
	});

	// Create Resource
	const resource = await prisma.resource.create({
		data: {
			title: 'Resource Title',
			description: 'Resource description here',
			dateEstablished: new Date('2020-01-01'),

			authorities: {
				connect: [{ id: contact1.id }],
			},
			stewards: {
				connect: [{ id: contact2.id }],
			},
			mavens: {
				connect: [{ id: contact1.id }],
			},

			nationTags: {
				connect: [{ id: nation1.id }, { id: nation2.id }],
			},
			attributeTags: {
				connect: [{ id: attributeTag1.id }, { id: attributeTag2.id }],
			},
			geographicTags: {
				connect: [{ id: geographicTag1.id }, { id: geographicTag2.id }],
			},
		},
	});
	console.log({ resource });

	// Create Training Resources linked to Resource
	await prisma.trainingResource.create({
		data: {
			title: 'Training 101',
			description: 'Introduction to Resource Management',
			url: 'https://example.com/training101',
			dateEstablished: new Date('2021-05-01'),
			resource: {
				connect: { id: resource.id },
			},
		},
	});

	await prisma.trainingResource.create({
		data: {
			title: 'Advanced Training',
			description: 'In-depth Resource Techniques',
			url: 'https://example.com/advanced-training',
			dateEstablished: new Date('2022-01-01'),
			resource: {
				connect: { id: resource.id },
			},
		},
	});
}

main()
	.catch((e: Error) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
