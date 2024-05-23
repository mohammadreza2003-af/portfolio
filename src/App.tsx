import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="mx-auto font-rubik bg-bg bg-cover bg-top  text-gray-800 w-full">
      <Navbar />
      <div className="xl:max-w-[1200px] md:mt-[5.5rem] mt-[4rem] w-full md:px-18 lg:px-24 sm:px-8 px-8  mx-auto flex flex-col">
        <Header />
      </div>
      <div className="py-12 px-6">
        <main className="lg:max-w-[1220px] w-full md:px-18 lg:px-24 sm:px-8 px-4 mx-auto">
          <About />
          <Skills />
          <Portfolio />
          <Work />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
