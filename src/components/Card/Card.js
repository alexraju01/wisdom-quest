import styles from "@/components/Card/card.module.css";

export default function Card({ children, name }) {
	const cardClassName = `card${name}`;
	return <div className={`${styles.card} ${styles[cardClassName]}`}>{children}</div>;
}
