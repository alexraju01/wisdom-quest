// import styles from "./page.module.css";
"use client";

import Profile from "@/components/profile";

export default function Home() {
	return (
		<div className="main-section">
			<div className="search-container">
				<input type="text" />
			</div>
			<div className="suggested-activities">
				<h2 className="large-titles">Suggested Activities</h2>

				<div className="top-side">
					<div className="singing">
						<div className="left-side">
							<h3 className="sub-titles">Singing</h3>
							<p>Signing songs is a great...</p>
							<button className="start">Start</button>
						</div>

						<img src="" alt="singer" />
					</div>
					<div className="reading">
						<div className="left-side">
							<h3 className="sub-titles">Reading</h3>
							<p>1290 Characters</p>
							<button className="start">Start</button>
						</div>

						<img src="" alt="reader" />
					</div>
				</div>
				<div className="bot-side">
					<div className="count-games">
						<h3 className="sub-titles">Count Games</h3>
						<p>Learn maths through games</p>
						<button className="start">Start</button>
					</div>
				</div>
			</div>
			<div className="progress">
				<h2 className="large-titles">Your Progress</h2>
				<div className="progress-table">
					<div className="headings">
						<span className="lesson">Lesson</span>
						<span className="grade">Grade</span>
						<span className="rank">Rank</span>
						<span className="study-time">Study Time</span>
						<span className="more">More</span>
					</div>
					<div className="done-lesson">
						<span className="logic-reason">Logic and Reasoning</span>
						<span className="result grade">A+</span>
						<span className="result-rank">Top 10%</span>
						<span className="result-time">234 mins</span>
						<span className="more-options">...</span>
					</div>
				</div>
			</div>
			<Profile />
		</div>
	);
}
