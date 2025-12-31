import React from "react";

type BadgeProps = {
  children: React.ReactNode;
};

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="px-3 py-1 border border-terciary rounded-full text-xs text-terciary font-medium tracking-wider">
      {children}
    </span>
  );
}
