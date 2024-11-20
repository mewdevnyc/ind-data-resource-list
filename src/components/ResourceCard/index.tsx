'use client';
interface Training {
	id: number;
	title: string | null;
	description: string | null;
	url: string | null;
	dateEstablished: string | null;
}

interface ResourceCardProps {
	id: number;
	title: string | null;
	description: string | null;
	url?: string | null;
	trainings?: Training[] | null;
	dateEstablished: Date | null;
	dateUpdated: Date | null;
	createdAt: Date | null;
	updatedAt: Date | null;
}

export default function ResourceCard(props: ResourceCardProps) {
	console.log(props);
	return (
		<div className="bg-black text-white rounded-md drop-shadow m-1 p-2 ">
			<div className="grid grid-cols-2 gap-3">
				<div className="">
					<h3 className="">{props.title}</h3>
					<p>Webpage</p>
				</div>
				<div className="text-right">
					<p>{props.dateEstablished?.toString()}</p>
					<p>{props.dateEstablished?.toString()}</p>
				</div>
				<div className="col-span-2">
					<h4>Description</h4>
					<p className="">{props.description}</p>
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
									<p>{training.dateEstablished?.toString()}</p>
								</li>
							))}
						</ul>
					) : (
						<p className="">No training resources available</p>
					)}
				</div>
				<div>
					<h4 className="">Contacts</h4>
					{props.trainings && props.trainings?.length > 0 ? (
						<ul>
							{props.trainings?.map(training => (
								<li key={training.id}>
									<h5>{training.title}</h5>
									<p className="">Webpage</p>
									<p className="">{training.description}</p>
									<p>{training.dateEstablished?.toString()}</p>
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
