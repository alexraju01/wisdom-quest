import capitalize from "@/utils/Capitalize";
import styles from "@/app/quiz/quiz.module.css";
import { Quiz } from "@/components/Quiz/Quiz";
export default function TopicQuestion({ params }) {
	return (
		<div>
			<h1 className={`${styles.title} ${styles.textCenter}`}>{capitalize(params.slug)}</h1>
			<Quiz />
		</div>
	);
}
