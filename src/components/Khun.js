import styles from "./Khun.module.css";

export default function Khun() {
  const animations = [
    styles.bubble_ttb_slow,
    styles.bubble_btt_slow,
    styles.bubble_ttb_fast,
    styles.bubble_btt_fast,
  ];

  const random_ani = animations[Math.floor(Math.random() * animations.length)];
  return (
    <svg
      className={`${random_ani} absolute top-0`}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="35" fill="#ee1c26" />
    </svg>
  );
}
