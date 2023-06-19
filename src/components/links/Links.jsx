import ScrollAnimation from "../../helpers/scrollAnimation";
import s from "./links.module.css";
import { ReactComponent as Discord } from "../../images/Discord.svg";
import { ReactComponent as Email } from "../../images/Email.svg";
import { ReactComponent as TikTok } from "../../images/TikTok.svg";
import { ReactComponent as LIN } from "../../images/LinkedIn.svg";
import { ReactComponent as Twitter } from "../../images/Twitter.svg";

export default function Links() {
  return (
    <section className={s.section}>
      <ScrollAnimation>
        <h2 className={s.title}>
          <span>our</span> links
        </h2>
      </ScrollAnimation>
      <ul className={s.list}>
        <a href="https://discord.gg/ps8f58kP3Z">
          <li className={s.item}>
            <Discord className={s.icon} /> <p>Discord</p>
          </li>
        </a>
        <a href="mailto:info@verifiedx.me">
          <li className={s.item}>
            <Email className={s.icon} /> <p>Email</p>
          </li>
        </a>
        <a href="www.tiktok.com/@verifiedx">
          <li className={s.item}>
            <TikTok className={s.icon} /> <p>TikTok</p>
          </li>
        </a>
        <a href="https://www.linkedin.com/company/verifiedx/">
          <li className={s.item}>
            <LIN className={s.icon} /> <p>LinkedIn</p>
          </li>
        </a>
        <a href="#">
          <li className={s.item}>
            <Twitter className={s.icon} /> Twitter
          </li>
        </a>
      </ul>
    </section>
  );
}
