import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Board from "./task/Board";

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
                <HeroSection />
                <Board />
            </div>
      <Footer />
    </>
  );
}

export default App;
