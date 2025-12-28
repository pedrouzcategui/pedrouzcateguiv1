import About from "@/components/About";
import ClientCarousel from "@/components/ClientCarousel";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";

const App = () => {
  return (
    <SmoothScrollProvider>
      <div id="smooth-content" className="bg-primary">
        <div className="w-[95%] mx-auto">
          <Hero />
          <About />
          <Projects />
          {/* <ClientCarousel /> */}
        </div>
      </div>
    </SmoothScrollProvider>
  );
};

export default App;
