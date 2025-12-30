"use client";
import { useRef } from "react";
import SectionLabel from "./SectionLabel";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type JobExperienceProps = {
  id: string; // Added ID for the counter
  job_title: string;
  company: string;
  description: string;
  from: Date;
  to: Date | "NOW";
  tags?: string[];
};

const jobExperiences: JobExperienceProps[] = [
  {
    id: "1",
    job_title: "Operations Specialist",
    company: "Gym Member Machine",
    description:
      "I'm now deeply involved in crucial company projects, collaborating closely with other departments. My focus has broadened from solely building automations to also critically evaluating the strategic value and implementation feasibility of departmental requests.",
    from: new Date("2025-01-01"),
    to: "NOW",
    tags: [
      "Project Collaboration",
      "Strategic Value Evaluation",
      "Process Implementation",
    ],
  },
  {
    id: "2",
    job_title: "Automation Specialist",
    company: "Gym Member Machine",
    description:
      "As an automation specialist, I bring expertise in utilizing various tools such as GoHighLevel, ClickUp, Airtable, Make, and Zapier to streamline processes. Additionally, I possess the ability to code custom automations, work with APIs, and resolve client issues through effective communication and troubleshooting. With a strong focus on optimizing efficiency, I am committed to delivering exceptional results that drive business success.",
    from: new Date("2023-01-01"),
    to: new Date("2025-01-01"),
    tags: [
      "JavaScript",
      "Make",
      "GoHighLevel",
      "ClickUp",
      "Airtable",
      "Zapier",
    ],
  },
  {
    id: "3",
    job_title: "Web Developer",
    company: "Ingeniust",
    description:
      "Helped build a rental car and boat rental applications using React.js, Vue.js, Laravel, Redux, component design with Storybook, as well as the usage of SSH, FTPs, and Linux for deployment.",
    from: new Date("2022-09-01"),
    to: new Date("2023-02-01"),
    tags: [
      "React.js",
      "Next.js",
      "Vue.js",
      "Redux.js",
      "React Query",
      "Tailwind.css",
      "Node.js",
      "Laravel",
    ],
  },
  {
    id: "4",
    job_title: "Full Stack Developer",
    company: "Chase B Snow Consulting",
    description:
      "Working with Integromat/Make, APIs and QA Testing for our clients. Created multiple integrations using Slack, Facebook Marketing (Insights) API, GoHighLevel, ClickUp, Google Spreadsheets and a lot more of APIs. Also developed a GHL Theme Customizer with React.js to modify dashboards.",
    from: new Date("2021-09-01"),
    to: new Date("2022-09-01"),
    tags: [
      "Integromat/Make",
      "APIs",
      "QA Testing",
      "Slack",
      "Facebook Marketing API",
      "Google Spreadsheets",
    ],
  },
];

const formatJobDate = (date: Date | "NOW"): string => {
  if (date === "NOW") return "Present";

  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
};

const JobExperience = ({
  id,
  job_title,
  company,
  description,
  from,
  to,
  tags,
}: JobExperienceProps & { id: string }) => {
  return (
    // We start with opacity-0 and a small translation (y-12)
    // to give it a "rising" effect when the animation triggers
    <div className="job-item opacity-0 translate-y-12 border-t border-terciary py-12 flex flex-col lg:flex-row gap-8">
      <div className="text-terciary font-mono text-sm w-12 pt-2">{id}</div>

      <div className="flex-1">
        <h2 className="text-4xl mb-4 md:text-5xl font-medium text-secondary tracking-tight">
          {job_title}
        </h2>
        <h3 className="text-xl font-semibold text-terciary mb-4">{company}</h3>
        <span className="font-light text-sm text-terciary">
          {formatJobDate(from)} - {formatJobDate(to)}
        </span>
      </div>

      <div className="flex-1 flex flex-col gap-6">
        <p className="font-light text-lg leading-relaxed text-secondary text-justify max-w-4/5">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags?.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 border border-terciary rounded-full text-[10px] text-terciary font-medium uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const JobsExperience = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>(".job-item");

      items.forEach((item) => {
        gsap.to(item, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: item, // Each item is its own trigger
            start: "top 75%", // Starts when the top of the item hits 85% of viewport
            // toggleActions: "play reverse play reverse",
          },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="py-24 min-h-screen">
      <header className="mb-24">
        <SectionLabel>Work Experience</SectionLabel>
      </header>

      <div className="flex flex-col">
        {jobExperiences.map((job, i) => (
          <JobExperience
            key={`job-${i}`}
            {...job}
            id={(i + 1).toString().padStart(2, "0")}
          />
        ))}
      </div>
    </section>
  );
};
