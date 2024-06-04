import capitalize from "@/utils/Capitalize";
import styles from "@/app/quiz/quiz.module.css";
import CreateQuestion from "@/components/createQuestion/createQuestion";
export default function TopicQuestion({ params }) {
	return (
		<div>
			<h1 className={`${styles.title} ${styles.textCenter}`}>{capitalize(params.slug)}</h1>
			<CreateQuestion />
		</div>
	);
}
