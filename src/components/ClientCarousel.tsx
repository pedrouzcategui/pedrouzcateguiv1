import SectionLabel from "./SectionLabel";

export default function ClientCarousel() {
  return (
    <div>
      <SectionLabel>Our clients:</SectionLabel>
      <div className="grid grid-cols-4">
        <div>Moduvated</div>
        <div>Gym Member Machine</div>
        <div>JM Immigration Firm</div>
        <div>Virtual Assist.io</div>
        <div>Rubikate</div>
        <div>Box Music Studio</div>
        <div>Oil and Gas Alliance</div>
      </div>
    </div>
  );
}
