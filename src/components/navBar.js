import Link from "next/link";
import { FaThLarge, FaAward, FaGamepad } from "react-icons/fa";
import { PiExamFill } from "react-icons/pi";
export default function Navbar() {
	return (
		<nav>
			<div className="logo">Logo</div>

			<Link href="/">
				<div className="overview nav-btn">
					<FaThLarge className="icon-overview" />
					<p>Overview</p>
				</div>
			</Link>

			<Link href="/quiz">
				<div className="quiz nav-btn">
					<PiExamFill className="icon-quiz" />
					<p>Quiz</p>
				</div>
			</Link>
			<Link href="/badge">
				<div className="badge nav-btn">
					<FaAward className="icon-badge" />
					<p>Badge</p>
				</div>
			</Link>

			<Link href="/games">
				<div className="games nav-btn">
					<FaGamepad className="icon-games" />
					<p>game</p>
				</div>
			</Link>
		</nav>
	);
}
