'use client';

import { Prisma } from '@prisma/client';
type ResourceWithRelations = Prisma.ResourceGetPayload<{
	include: {
		trainings: true;
		contacts: true;
	};
}>;

export default function ResourceCard(props: ResourceWithRelations) {
	console.log(props);
	return (
		<div className="bg-black text-white rounded-md drop-shadow m-1 p-2 ">
			<div className="grid grid-cols-2 gap-3">
				<div className="col-span-2">
					<h3 className="">{props.title}</h3>
					<a href={props.url}>Webpage</a>
				</div>
				<div className="col-span-2">
					<h4>Description</h4>
					<p className="">{props.description}</p>
				</div>
				<div>
					<h4 className="">Contacts</h4>
					{props.contacts && props.contacts?.length > 0 ? (
						<ul>
							{props.contacts?.map(contact => (
								<li key={contact.id}>
									<h5>{contact.name}</h5>
									<p className="">Email: {contact.email}</p>
								</li>
							))}
						</ul>
					) : (
						<p className="">No contacts available</p>
					)}
				</div>
				<div>
					<h4 className="">Training</h4>
					{props.trainings && props.trainings?.length > 0 ? (
						<ul>
							{props.trainings?.map(training => (
								<li key={training.id}>
									<h5>{training.title}</h5>
									<p className="">Webpage</p>
									<p className="">{training.description}</p>
								</li>
							))}
						</ul>
					) : (
						<p className="">No training resources available</p>
					)}
				</div>
			</div>
		</div>
	);
}
