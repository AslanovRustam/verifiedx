import s from "./howItWorks.module.css";
import image from "../../images/imageWork.png";

const list = [
  "Choose Your Game - Which game's avatar do you want to verify?",
  "Link Your Gaming Account",
  "Verify Your Real Identity & Avatar",
  "Claim Your Verified Avatar - Subscribe and unlock your verified avatar & badge",
  "Save Your One-Time Pass - Use it to quickly verify avatars in all VerifiedX partner games with a single subscription",
  "Play with Confidence - Easily identify verified and trustworthy players.",
];

export default function HowItWorks() {
  return (
    <section className={s.section} id="works">
      <div>
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
            <img className={s.image} src={image} alt="work" />
          </div>
          <div className={s.listSection}></div>
        </div>
      </div>
      <div className={s.wrapperList}>
        <ul className={s.list}>
          {list.map((item, index) => (
            <li key={item} data-number={`0${index + 1}`} className={s.item}>
              {item}
            </li>
          ))}
        </ul>
        <p className={s.btnTitle}>
          Join the Waitlist <span>Now!</span>
        </p>
        <a href="mailto:info@verifiedx.me">
          <button className={s.btn} type="button">
            Join Waitlist
          </button>
        </a>
      </div>
    </section>
  );
}
