import ScrollAnimation from "../../helpers/scrollAnimation";
import s from "./values.module.css";
import value from "../../images/value.png";
const list = [
  {
    title: "We’re about ",
    green: "real-life impact",
    description:
      "We’re obsessed with making the gaming community safer & more convenient. Helping our customers to play with more confidence & peace of mind.",
  },
  {
    title: "We value ",
    green: "trust",
    description:
      "We are trusted & we trust. This is the essence of what we do.",
  },
  {
    title: "We’re about ",
    green: "the people",
    description:
      "We genuinely care for each other and for every single of our customers. We love what we do and are very approachable.",
  },
  {
    title: "We’re hungry ",
    green: "for improvement",

    description:
      "We do our best to create the best experience possible for our customers and always seek feedback to improve.",
  },
  {
    title: "We’re ",
    green: "fun & playful",
    description:
      "We’re gamers at heart and serve gamers, so being fun & playful is a second nature for us.",
  },
];

export default function Values() {
  return (
    <section className={s.section}>
      <ScrollAnimation>
        <h2 className={s.title}>
          Our <span>Values</span>
        </h2>
      </ScrollAnimation>
      <img className={s.image} src={value} alt="value" />
      <ul className={s.list}>
        {list.map((item) => (
          <li key={item.green} className={s.item}>
            <p className={s.titleDescription}>
              {item.title}
              <span>{item.green}</span>
            </p>
            <p className={s.description}>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
