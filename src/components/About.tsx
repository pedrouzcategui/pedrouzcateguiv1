import SectionLabel from "./SectionLabel";

export default function About() {
  return (
    <section id="about" className="py-12 md:py-16">
      <div>
        <SectionLabel>About Me</SectionLabel>
        <div className="lg:w-4/5">
          <p className="text-4xl/15 lg:text-6xl/20 text-secondary">
            I help businesses transform through software, A.I and systems
            re-design, saving them tens of thousands of dollars (and time).
          </p>
        </div>
      </div>
    </section>
  );
}
