import s from "./description.module.css";

export default function Description() {
  return (
    <>
      <div className={s.section}>
        <p className={s.description}>
          We form an unbeatable alliance, driven by a shared passion and vision
          for creating safer and more convenient online experiences for gamers.{" "}
        </p>
        <p className={s.description}>
          Together, we have a combined 40+ years of experience in gaming,
          immersive technologies, web3 & cybersecurity.
        </p>
      </div>
      <div className={s.achievs}>
        <h2 className={s.title}>
          The company was started in January 2023 (registered in April 2023).
          Since then,{" "}
          <span className={s.titleGreen}>we’ve achieved great things:</span>
        </h2>
      </div>
      <ul className={s.list}>
        <li className={s.item}>
          <span>1.</span> We completed our prototype development
        </li>
        <li className={s.item}>
          <span>2.</span> Agreed strong strategic partnerships to accelerate the
          company’s growth
        </li>
      </ul>
    </>
  );
}
