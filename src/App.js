import Container from "./components/container/Container";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import SlideSection from "./components/slideSection/SlideSection";
import Benefits from "./components/benefits/Benefits";
import HowItWorks from "./components/howItWoks/HowItWorks";
import Unite from "./components/unite/Unite";
import Future from "./components/future/Future";

function App() {
  return (
    <>
      {/* <Container> */}
      <Header />
      <Hero />
      <SlideSection />
      <Benefits />
      <HowItWorks />
      <Unite />
      <Future />
      <Footer />
      {/* </Container> */}
    </>
  );
}

export default App;
