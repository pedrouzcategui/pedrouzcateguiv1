import About from "@/components/About";
import Hero from "@/components/Hero";
import { JobsExperience } from "@/components/JobsTimeline";
import Projects from "@/components/Projects";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";

const App = () => {
  return (
    <SmoothScrollProvider>
      <div id="smooth-content">
        <div className="w-[95%] mx-auto">
          <Hero />
          <Projects />
          {/* <About /> */}
          <JobsExperience />
        </div>
      </div>
    </SmoothScrollProvider>
  );
};

export default App;
