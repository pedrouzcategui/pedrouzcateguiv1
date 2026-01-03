import Hero from "@/components/Hero";
import { JobsExperience } from "@/components/JobsTimeline";
import Projects from "@/components/Projects";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";

export const metadata = {
  title: "Pedro Uzcátegui | A.I Engineer",
  description:
    "Pedro Uzcátegui is a software engineer focused on A.I and open source applications",
  alternates: {
    canonical: "https://pedrouzcategui.com",
  },
  openGraph: {
    title: "Pedro Uzcátegui",
    description:
      "Pedro Uzcátegui is a software engineer focused on A.I and open source applications",
    url: "https://pedrouzcategui.com",
    siteName: "Pedro Uzcátegui",
    images: [
      {
        url: "https://pedrouzcategui.com/og-home.jpg", // High-quality 1200x630 image
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

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
