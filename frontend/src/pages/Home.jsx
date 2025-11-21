import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Advantages from '../components/Advantages';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Advantages />
        <Contact />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
};

export default Home;
