import { NavLink } from "react-router-dom";
import s from "./abautUs.module.css";
import coin from "../../images/coin.png";
import image1 from "../../images/image1.png";
import image2 from "../../images/image2.png";
import image3 from "../../images/image3.png";
import image4 from "../../images/image4.png";

export default function AboutUs() {
  return (
    <section className={s.section}>
      <div className={s.text}>
        <div className={s.links}>
          <p>
            <NavLink to="/" className={s.navLink}>
              Home
            </NavLink>
          </p>{" "}
          <div>&nbsp;- About us</div>
        </div>
        <h2 className={s.title}>
          About <span>Us</span>
        </h2>
        <p className={s.subTitle}>
          Empower a safer & more convenient virtual world
        </p>
        <p className={s.description}>
          In the booming web3 and metaverse, millions of people engage in
          virtual worlds for gaming, socializing, and collaboration. However,
          most of these worlds lack a secure avatar verification system, leaving
          users vulnerable to scams, frauds, and impersonation.
        </p>
      </div>
      <div className={s.images}>
        <div className={s.wrapper}>
          <img className={s.image1} src={image1} alt="image1" />
          <img className={s.image2} src={image2} alt="image2" />
          <img className={s.image3} src={image3} alt="image3" />
          <img className={s.image4} src={image4} alt="image4" />
          <img className={s.coin} src={coin} alt="coin" />
        </div>
        <div className={s.textContainer}>
          <p className={s.description}>
            Additionally, these worlds often operate in isolation. VerifiedX is
            a cross-game avatar verification platform for web3 gamers,
            developers, and metaverse residents.
          </p>
          <p className={s.descriptionGreen}>
            Our mission is to enhance safety, credibility, and convenience in
            and across these virtual realms.
          </p>
        </div>
      </div>
    </section>
  );
}
