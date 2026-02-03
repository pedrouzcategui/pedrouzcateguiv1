import React from "react";

type BadgeProps = {
  children: React.ReactNode;
};

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="px-3 py-1 rounded-full text-xs font-medium tracking-wider bg-transparent border border-foreground/10 text-foreground/60">
      {children}
    </span>
  );
}
