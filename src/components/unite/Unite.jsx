import SlideSection from "../slideSection/SlideSection";
import Reviews from "../reviews/Reviews";
import s from "./unite.module.css";
const items = [
  {
    title1: " – Mihai M.,",
    title2: "SuperAwesome",
    description:
      "VerifiedX provides great cross-game avatar verification services. Something unique in the web3 gaming sector.",
  },
  {
    title1: " – Tuanui T.,",
    title2: "DataGuard.",
    description:
      "VerifiedX adds value for gamers and game developers by enhancing safety, convenience, and credibility in a compliant manner.",
  },
];
export default function Unite() {
  return (
    <div className={s.section}>
      <div className={s.wrapper}>
        <p className={s.title}>
          <span className={s.titleGreen}>Game-Changers </span>Unite!
        </p>
      </div>
      <SlideSection green />
      <Reviews items={items} />
    </div>
  );
}
