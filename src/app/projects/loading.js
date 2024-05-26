export default function Loading() {
	return (
		<div>
			<h1>Projects</h1>
			<ul>
				{Array(3)
					.fill(0)
					.map((_el, index) => (
						<li key={index}>
							<div>Loading . . . </div>
						</li>
					))}
			</ul>
		</div>
	);
}
