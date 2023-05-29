import s from "./howItWorks.module.css";
import image from "../../images/imageWork.png";

export default function HowItWorks() {
  return (
    <section className={s.section}>
      <div className={s.wrapper}>
        <p className={s.title}>
          <span className={s.titleGreen}>HOW IT </span>WORKS
        </p>
      </div>
      <div>
        <div className={s.verifySection}>
          <p className={s.subTitle}>Verify Your Avatars</p>
          <p className={s.subTitleWhite}>- Play with Confidence!</p>
          <p className={s.description}>
            Get your avatars in Roblox, VR Chat, and more verified in 6 simple
            steps.
          </p>
          <img src={image} alt="work" />
        </div>
        <div className={s.listSection}></div>
      </div>
    </section>
  );
}
