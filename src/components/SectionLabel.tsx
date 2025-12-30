import React from "react";

type SectionLabelProps = {
  children: string;
};

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <h3 className="text-4xl font-semibold text-secondary mb-24 sm:mb-12 border-l-2 border-terciary pl-4">
      {children}
    </h3>
  );
}
