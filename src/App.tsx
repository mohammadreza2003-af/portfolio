import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="px-8 mx-auto py-12 font-rubik bg-bg bg-cover bg-top text-gray-800">
      <div className="container mx-auto flex flex-col">
        <Navbar />
        <Header />
      </div>
      <main className="container mx-auto mt-20">
        <About />
        <Skills />
        <Portfolio />
        <Work />
        <Contact />
      </main>
    </div>
  );
}

export default App;
