"use client";
import { useRef } from "react";
import SectionLabel from "./SectionLabel";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Badge from "./Badge";

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
    from: new Date("2025-02-01"),
    to: "NOW",
    tags: ["Python", "Make", "Zapier", "N8N", "ClickUp", "Cloudflare"],
  },
  {
    id: "2",
    job_title: "Automation Specialist",
    company: "Gym Member Machine",
    description:
      "As an automation specialist, I bring expertise in utilizing various tools such as GoHighLevel, ClickUp, Airtable, Make, and Zapier to streamline processes. Additionally, I possess the ability to code custom automations, work with APIs, and resolve client issues through effective communication and troubleshooting. With a strong focus on optimizing efficiency, I am committed to delivering exceptional results that drive business success.",
    from: new Date("2023-01-01"),
    to: new Date("2025-02-01"),
    tags: [
      "JavaScript",
      "Python",
      "Make",
      "GoHighLevel",
      "ClickUp",
      "Airtable",
      "Zapier",
    ],
  },
  {
    id: "3",
    job_title: "Full Stack Web Developer",
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
  job_title,
  company,
  description,
  from,
  to,
  tags,
  isLast, // Add this prop
}: JobExperienceProps & { id: string; isLast: boolean }) => {
  return (
    <div className="job-item opacity-0 translate-y-12 right-3 flex lg:flex-row gap-8 relative">
      {/* TIMELINE COLUMN */}
      <div className="flex flex-col items-center w-8 shrink-0 relative top-15">
        {/* THE DOT - Using fixed dimensions instead of padding for better alignment */}
        <div className="bg-secondary h-4 w-4 rounded-full z-10 shrink-0"></div>

        {/* THE LINE - Starts from the dot and goes to the bottom of the container */}
        {!isLast && (
          <div className="absolute bg-secondary w-1 z-0 top-0 bottom-0"></div>
        )}
      </div>

      <div className="flex py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Header Info */}
          <div className="flex-1">
            <h2 className="text-2xl mb-4 md:text-4xl font-medium text-secondary tracking-tight">
              {job_title}
            </h2>
            <h3 className="text-xl font-semibold text-terciary mb-4">
              {company}
            </h3>
            <span className="font-light text-sm text-terciary">
              {formatJobDate(from)} - {formatJobDate(to)}
            </span>
          </div>

          {/* Description and Tags */}
          <div className="flex flex-col flex-2 gap-6">
            <p className="font-normal text-lg leading-relaxed text-secondary text-justify">
              {description}
            </p>
            <div className="flex flex-wrap gap-2">
              {tags?.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </div>
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
            start: "top 60%", // Starts when the top of the item hits 85% of viewport
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
            isLast={i === jobExperiences.length - 1} // Logic to detect last element
          />
        ))}
      </div>
    </section>
  );
};
