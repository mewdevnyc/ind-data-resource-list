import { NextResponse } from 'next/server';
import { db } from '../../../../lib/prisma';

export async function GET() {
	try {
		const resources = await db.resource.findMany({
			include: {
				trainings: true,
				contacts: true,
			},
		});
		return NextResponse.json(resources, { status: 200 });
	} catch (error) {
		return NextResponse.json(
			{ message: 'Could not fetch resources. Error: ' + error },
			{ status: 500 }
		);
	}
}
