import SectionLabel from "./SectionLabel";

export default function About() {
  return (
    <section id="about" className="py-12 md:py-16">
      <div>
        <SectionLabel>About Me</SectionLabel>
        <div>
          <p className="text-6xl/20  text-[#ECDFCC]">
            I help businesses transform through software, A.I and systems
            re-design, saving them tens of thousands of dollars (and time).
          </p>
        </div>
      </div>
    </section>
  );
}
