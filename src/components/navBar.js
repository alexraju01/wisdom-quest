import React from "react";
import Link from "next/link";
import styles from "../app/_styles/navbar.css";
export default function Navbar() {
	return (
		<nav>
			<div id="logo">Logo</div>
			<ul>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/quiz">Quiz</Link>
				</li>
			</ul>
		</nav>
	);
}
