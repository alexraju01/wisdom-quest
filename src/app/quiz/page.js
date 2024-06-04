import TopicList from "@/components/topicList/topicList";
import styles from "@/app/quiz/quiz.module.css";
export default function MathCardsPage() {
	return (
		<div className={`${styles.textCenter} ${styles.bold} ${styles.title}`}>
			<h2>Math Topics</h2>
			<TopicList />
		</div>
	);
}
