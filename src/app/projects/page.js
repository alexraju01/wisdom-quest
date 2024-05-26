// Fetching data on the server with fetch
export default async function ProjectsPage() {
	const response = await fetch("http://localhost:3001/repos", {
		cache: "no-cache",
	});
	const repos = await response.json();

	return (
		<div>
			{/* {console.log("hee")} */}
			<h1>Projects</h1>
			<ul>
				{repos.map((repo) => (
					<li key={repo.id}>
						<div>{repo.title}</div>
						<div>{repo.description}</div>
						<div>{repo.stargazers_count}</div>
					</li>
				))}
			</ul>
		</div>
	);
}

// async function getData() {
//     const res = await fetch('https://api.example.com/...')
//     // The return value is *not* serialized
//     // You can return Date, Map, Set, etc.

//     if (!res.ok) {
//       // This will activate the closest `error.js` Error Boundary
//       throw new Error('Failed to fetch data')
//     }

//     return res.json()
//   }

//   export default async function Page() {
//     const data = await getData()

//     return <main></main>
//   }
