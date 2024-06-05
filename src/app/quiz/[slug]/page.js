import capitalize from "@/utils/Capitalize";
import styles from "@/components/Quiz/Quiz.module.css";
import { Quiz } from "@/components/Quiz/Quiz";
export default function TopicQuestion({ params }) {
	return (
		<div className={styles.quizContainer}>
			<h1 className={`${styles.title} ${styles.textCenter} ${styles.titleSpacing}`}>
				{capitalize(params.slug)}
			</h1>
			<Quiz operation={params.slug} />
		</div>
	);
}
