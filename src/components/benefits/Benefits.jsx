import s from "./benefits.module.css";
import Slider from "../slider/Slider";

const items = [
  {
    title: "Level Up Your Gaming Safety",
    description:
      "Stay safe from scammers & imposters with verified avatars in all your favourite games. Make your friends trust you more.",
  },
  {
    title: "Earn Your Friends' Trust!",
    description:
      "Showcase your verified avatar and build trust among your friends as a reliable and authentic gamer.",
  },
  {
    title: "Game On withVerified Avatars",
    description:
      "Get your avatars verified in over 7,000 games with just one subscription.",
  },
  {
    title: "Level Up Your Gaming ",
    description:
      " in all your favourite games. Make your friends trust you more.",
  },
  {
    title: " Trust!",
    description:
      "uild trust among your friends as a reliable and authentic gamer.",
  },
];

export default function Benefits() {
  return (
    <div className={s.section}>
      <div className={s.wrapper}>
        <p className={s.title}>
          <span className={s.titleGreen}>Bene</span>fits
        </p>
      </div>
      <Slider items={items} />
    </div>
  );
}
