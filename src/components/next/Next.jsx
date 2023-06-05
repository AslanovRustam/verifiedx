import s from "./next.module.css";

export default function Next() {
  return (
    <section className={s.section}>
      <div className={s.next}>
        <p className={s.subTitle}>
          What’s <span className={s.subTitleGreen}>next?</span>
        </p>
        <ul className={s.list}>
          <li className={s.item}>
            <span>1.</span> We’re now raising our pre-seed to develop our MVP,
            level up the team and operations, and acquire new customers.
          </li>
          <li className={s.item}>
            <span>2.</span> Launch in November 2023 and keep the fun on!
          </li>
        </ul>
      </div>
    </section>
  );
}
