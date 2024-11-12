'use client';

interface ResourceCardProps {
	id: number;
	title: string;
	description: string | null;
	dateEstablished: Date | null;
	dateUpdated: Date | null;
	createdAt: Date;
	updatedAt: Date;
}

export default function ResourceCard(props: ResourceCardProps) {
	return (
		<>
			<h3>{props.title}</h3>
			<p>{props.description}</p>
		</>
	);
}
