import React from "react";

type SectionLabelProps = {
  children: string;
};

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <h3 className="text-3xl font-bold text-[#ECDFCC] mb-8 sm:mb-12 border-l-4 border-terciary pl-4">
      {children}
    </h3>
  );
}
