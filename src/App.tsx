import { AsideEmailPart } from "./components/AsideEmailPart";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { Icons } from "./components/Icons";
import { Socials } from "./components/Socials";

const App = () => {
  return (
    <div className=" bg-[var(--main-dark-theme-color)] dark:bg-[#060608]">
      <Icons />
      <Header />
      <div className="main-container">
        <HeroSection />
        <Socials />
        <AsideEmailPart />
      </div>
      <Footer />
    </div>
  );
};

export default App;
