import SlideShow from "./components/SlideShow";
import TentsSection from "./components/TentsSection";

const HomePage = () => {
  return (
    <main className="flex flex-col items-center justify-center mt-96">
      <SlideShow />
      <TentsSection />
    </main>
  );
};

export default HomePage;
