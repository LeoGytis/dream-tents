import SlideShow from "./components/SlideShow";
import TentsSection from "./components/TentsSection";

const HomePage = () => {
  return (
    <main className="flex flex-col items-center justify-center">
      <SlideShow />
      <TentsSection />
      <TentsSection />
    </main>
  );
};

export default HomePage;
