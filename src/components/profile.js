export default function Profile() {
	return (
		<aside>
			<div className="profile">Profile Name</div>
			<div className="average-study">
				<h2>Average Study Time</h2>
				<div className="time-section">
					<span className="day">Day</span>
					<span className="week">week</span>
					<span className="month">Month</span>
				</div>
				<img src="" alt="Bar chart" />
			</div>
			<div className="performance-conatiner">
				<h2>Your Performance</h2>
			</div>
		</aside>
	);
}
