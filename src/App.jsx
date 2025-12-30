import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import BitcoinSection from "./components/BitcoinSection";
import TrendingNFTs from "./components/TrendingNFTs";
import PopularArtists from "./components/PopularArtists";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full relative max-md:flex max-md:flex-col max-md:!h-auto max-md:!overflow-visible max-md:overflow-x-hidden" style={{ background: '#0D0B0C', height: '6004px', overflow: 'hidden' }}>
      <Navbar />
      <Hero />
      <Stats />
      <BitcoinSection />
      <TrendingNFTs />
      <PopularArtists />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
