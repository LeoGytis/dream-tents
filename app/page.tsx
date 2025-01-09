import Navbar from "./NavBar";

const HomePage = () => {
  return (
    <div className="mx-auto max-w-screen-xl p-8 md:p-12 lg:p-20 lg:py-12">
      <nav className="w-full flex justify-between items-center border-b border-orange-400 pb-4">
        <Navbar />
      </nav>
      <main></main>
    </div>
  );
};

export default HomePage;
