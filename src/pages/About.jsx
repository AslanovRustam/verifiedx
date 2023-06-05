import AboutUs from "../components/aboutUs/AboutUs";
import SlideSection from "../components/slideSection/SlideSection";
import GotHere from "../components/gotHere/GotHere";
import Avatars from "../components/avatars/Avatars";
import Description from "../components/description/Description";
import Next from "../components/next/Next";
import Values from "../components/values/Values";
import Mail from "../components/mail/Mail";

export default function About() {
  return (
    <>
      <AboutUs />
      <SlideSection />
      <GotHere />
      <Avatars />
      <Description />
      <SlideSection green />
      <Next />
      <Values />
      <Mail />
    </>
  );
}
