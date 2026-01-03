import SectionLabel from "./SectionLabel";

export default function About() {
  return (
    <section id="about" className="py-12 md:py-16">
      <div>
        <SectionLabel>About Me</SectionLabel>
        <div className="text-justify md:text-left lg:w-4/5">
          <p className="text-3xl/15 lg:text-6xl/20 text-secondary">
            <br />I make things, <br /> they don't work, <br /> I fix them,{" "}
            <br /> they work.
          </p>
        </div>
      </div>
    </section>
  );
}
