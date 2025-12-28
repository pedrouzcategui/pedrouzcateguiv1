import SectionLabel from "@/components/SectionLabel";
import Link from "next/link";

export default function CaseStudiesPage() {
  return (
    <div className="w-[95%] mx-auto py-8">
      <SectionLabel>Case Studies</SectionLabel>
      <CaseStudy />
    </div>
  );
}

const CaseStudy = () => {
  return (
    <div>
      <h3>This is the title of the case study</h3>
      <p>This is a paragraph of what was done in this Case Study</p>
      <span>This</span> <span>Are</span> <span>The</span>{" "}
      <span>Categories</span>
      <button>
        <Link href={`/case-study/url`}>Link to read the case study</Link>
      </button>
    </div>
  );
};
